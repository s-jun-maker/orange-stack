import {
  integer,
  pgTable,
  varchar,
  timestamp,
  text,
  boolean,
} from "drizzle-orm/pg-core";

export const bbcContentTable = pgTable("bbc-contents", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp().defaultNow().notNull(),
  title: varchar({ length: 255 }).notNull(),
  url: varchar({ length: 500 }),
  content: text(),
  audio_url: varchar({ length: 500 }),
});

export const contactMessagesTable = pgTable("contact_messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp().defaultNow().notNull(),
  first_name: varchar({ length: 100 }).notNull(),
  last_name: varchar({ length: 100 }),
  email: varchar({ length: 255 }).notNull(),
  subject: varchar({ length: 500 }),
  message: text().notNull(),
  is_read: boolean().default(false).notNull(),
  responded_at: timestamp(),
});
