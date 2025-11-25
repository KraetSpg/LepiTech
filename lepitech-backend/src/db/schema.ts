import { pgTable, serial, varchar, integer, timestamp, foreignKey } from "drizzle-orm/pg-core";

// Kategorien-Tabelle
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 64 }).notNull(),
});

// Software-Tabelle
export const software = pgTable("software", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  os: varchar("os", { length: 32 }), // z.B. "Windows", "macOS", etc.
  cpu: varchar("cpu", { length: 128 }),
  ram: integer("ram"), // in MB
  storage: integer("storage"), // in GB
});

// Many-to-Many-Verknüpfung Software <-> Kategorien
export const softwareCategories = pgTable("software_categories", {
  softwareId: integer("software_id").references(() => software.id).notNull(),
  categoryId: integer("category_id").references(() => categories.id).notNull(),
});

// Geräte-Tabelle
export const devices = pgTable("devices", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  manufacturer: varchar("manufacturer", { length: 64 }),
  cpu: varchar("cpu", { length: 128 }),
  ram: integer("ram"), // in MB
  storage: integer("storage"), // in MB
  os: varchar("os", { length: 32 }),
  price: integer("price"), // in EUR-Cent
});

// Aggregierte Mindestanforderungen-Tabelle
// Aggregiert bedeutet in diesem Fall das das Backend die höchsten Anforderungen errechnet und dann hier einen Eintrag erstellt und diesen dann ans FE zurückgibt
export const aggregatedRequirements = pgTable("aggregated_requirements", {
  id: serial("id").primaryKey(),
  os: varchar("os", { length: 32 }).notNull(),
  cpu: varchar("cpu", { length: 128 }).notNull(),
  ram: integer("ram").notNull(),
  storage: integer("storage").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Logging-Tabelle
export const generationLogs = pgTable("generation_logs", {
  id: serial("id").primaryKey(),
  aggregatedReqId: integer("aggregated_req_id").references(() => aggregatedRequirements.id).notNull(),
  softwareIds: varchar("software_ids", { length: 400 }).notNull(), // Komma-separierte Liste der Software-IDs
  suggestedDeviceIds: varchar("suggested_device_ids", { length: 400 }).notNull(), // Komma-separierte Liste der Device-IDs
  generatedAt: timestamp("generated_at").defaultNow(),
});


export type SelectSofware = typeof software.$inferSelect;
export type SelectDevices = typeof devices.$inferSelect;
export type SelectAggregatedRequirements = typeof aggregatedRequirements.$inferSelect;
export type SelectCategories = typeof categories.$inferSelect;

export type InsertSoftware = typeof software.$inferInsert;