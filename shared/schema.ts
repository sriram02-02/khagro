import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: varchar("category").notNull(),
  image: text("image").notNull(),
  specifications: text("specifications").array().notNull(),
  detailedItems: text("detailed_items").array().notNull(),
  categoryIcon: text("category_icon").notNull(),
  gradient: text("gradient").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  service: varchar("service"),
  message: text("message").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
