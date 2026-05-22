import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";
import fs from "node:fs/promises";
import path from "node:path";

const router: IRouter = Router();

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(req: Parameters<Parameters<IRouter["post"]>[1]>[0]): string {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = typeof forwarded === "string" ? forwarded.split(",")[0].trim() : req.socket?.remoteAddress ?? "unknown";
  return ip;
}

router.post("/contact", async (req, res): Promise<void> => {
  const key = getRateLimitKey(req);
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (entry && now < entry.resetAt) {
    if (entry.count >= 5) {
      res.status(429).json({ error: "Too many requests. Please try again later." });
      return;
    }
    entry.count++;
  } else {
    rateLimitMap.set(key, { count: 1, resetAt: now + 60 * 60 * 1000 });
  }

  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  if (parsed.data.honeypot) {
    res.json({ success: true, message: "Thank you! We'll be in touch within 24 hours." });
    return;
  }

  try {
    await db.insert(contactsTable).values({
      fullName: parsed.data.fullName,
      businessName: parsed.data.businessName ?? null,
      email: parsed.data.email,
      phone: parsed.data.phone,
      service: parsed.data.service,
      message: parsed.data.message ?? null,
    });
  } catch (dbErr) {
    req.log.warn({ dbErr }, "Database insert failed, falling back to CSV only");
  }

  // Save to CSV for Excel compatibility
  try {
    const csvPath = path.resolve(process.cwd(), "contacts.csv");
    
    // Check if file exists to add header
    let exists = false;
    try {
      await fs.access(csvPath);
      exists = true;
    } catch {
      exists = false;
    }

    const header = "Date,Name,Business,Email,Phone,Service,Message\n";
    const row = [
      new Date().toISOString(),
      `"${parsed.data.fullName.replace(/"/g, '""')}"`,
      `"${(parsed.data.businessName ?? "").replace(/"/g, '""')}"`,
      `"${parsed.data.email.replace(/"/g, '""')}"`,
      `"${(parsed.data.phone ?? "").replace(/"/g, '""')}"`,
      `"${parsed.data.service.replace(/"/g, '""')}"`,
      `"${(parsed.data.message ?? "").replace(/"/g, '""')}"`
    ].join(",") + "\n";

    if (!exists) {
      await fs.writeFile(csvPath, header + row);
    } else {
      await fs.appendFile(csvPath, row);
    }
  } catch (err) {
    req.log.error({ err }, "Error saving to CSV");
  }

  req.log.info({ email: parsed.data.email }, "Contact form submitted");

  res.json({ success: true, message: "Thank you! We'll be in touch within 24 hours." });
});

export default router;
