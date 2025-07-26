import {
  integer,
  pgTable,
  varchar,
  timestamp,
  text,
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
