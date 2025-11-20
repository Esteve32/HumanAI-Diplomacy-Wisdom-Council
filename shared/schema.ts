import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const wiseFigures = pgTable("wise_figures", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  era: text("era").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  sampleQuestion: text("sample_question").notNull(),
  chatGptLink: text("chat_gpt_link"),
  votes: integer("votes").notNull().default(0),
  imageUrl: text("image_url").notNull(),
});

export const insertWiseFigureSchema = createInsertSchema(wiseFigures).omit({
  id: true,
  votes: true,
});

export type InsertWiseFigure = z.infer<typeof insertWiseFigureSchema>;
export type WiseFigure = typeof wiseFigures.$inferSelect;

export const votes = pgTable("votes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  figureId: varchar("figure_id").notNull(),
  sessionId: text("session_id").notNull(),
});

export const insertVoteSchema = createInsertSchema(votes).omit({
  id: true,
});

export type InsertVote = z.infer<typeof insertVoteSchema>;
export type Vote = typeof votes.$inferSelect;

export const conversations = pgTable("conversations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  figureId: integer("figure_id").notNull(),
  sessionId: text("session_id").notNull(),
  createdAt: integer("created_at").notNull().$defaultFn(() => Date.now()),
});

export const insertConversationSchema = createInsertSchema(conversations).omit({
  id: true,
  createdAt: true,
});

export type InsertConversation = z.infer<typeof insertConversationSchema>;
export type Conversation = typeof conversations.$inferSelect;

export const messages = pgTable("messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  conversationId: varchar("conversation_id").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  createdAt: integer("created_at").notNull().$defaultFn(() => Date.now()),
});

export const insertMessageSchema = createInsertSchema(messages).omit({
  id: true,
  createdAt: true,
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;
