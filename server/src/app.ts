import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import path from "node:path";
import fs from "node:fs";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: any) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: any) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: any, res: any, next: any) => {
  if (req.originalUrl && req.originalUrl.startsWith("/api")) {
    req.url = req.originalUrl;
  }
  next();
});

// Explicit sitemap.xml & robots.txt routes to ensure XML/text headers and avoid 404/HTML error responses
app.get("/sitemap.xml", (_req, res) => {
  const possiblePaths = [
    path.resolve(process.cwd(), "client/public/sitemap.xml"),
    path.resolve(process.cwd(), "client/dist/sitemap.xml"),
    path.resolve(process.cwd(), "../client/public/sitemap.xml"),
    path.resolve(process.cwd(), "../client/dist/sitemap.xml")
  ];
  for (const sPath of possiblePaths) {
    if (fs.existsSync(sPath)) {
      res.header("Content-Type", "application/xml; charset=utf-8");
      return res.sendFile(sPath);
    }
  }
  res.status(404).header("Content-Type", "text/plain").send("sitemap.xml not found");
});

app.get("/robots.txt", (_req, res) => {
  const possiblePaths = [
    path.resolve(process.cwd(), "client/public/robots.txt"),
    path.resolve(process.cwd(), "client/dist/robots.txt"),
    path.resolve(process.cwd(), "../client/public/robots.txt"),
    path.resolve(process.cwd(), "../client/dist/robots.txt")
  ];
  for (const rPath of possiblePaths) {
    if (fs.existsSync(rPath)) {
      res.header("Content-Type", "text/plain; charset=utf-8");
      return res.sendFile(rPath);
    }
  }
  res.status(404).header("Content-Type", "text/plain").send("robots.txt not found");
});

app.use("/api", router);

export default app;
