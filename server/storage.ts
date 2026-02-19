import { contacts, type InsertContact, type Contact } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<Contact> {
    if (!db) throw new Error("Database not initialized");
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private currentId: number;

  constructor() {
    this.contacts = new Map();
    this.currentId = 1;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentId++;
    const newContact: Contact = {
      ...contact,
      id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone || null,
      message: contact.message,
      createdAt: new Date(),
    };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = db ? new DatabaseStorage() : new MemStorage();