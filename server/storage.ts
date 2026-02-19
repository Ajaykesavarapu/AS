import { contacts, type InsertContact, type Contact } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }
}

export const storage = new DatabaseStorage();