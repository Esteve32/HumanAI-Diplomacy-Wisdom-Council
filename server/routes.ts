import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConversationSchema, insertMessageSchema } from "@shared/schema";
import { generatePersonaResponse } from "./openai";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/conversations", async (req, res) => {
    try {
      const data = insertConversationSchema.parse(req.body);
      const sessionId = req.session.id;
      
      const conversation = await storage.createConversation({
        ...data,
        sessionId,
      });
      
      res.json(conversation);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/conversations", async (req, res) => {
    try {
      const sessionId = req.session.id;
      const conversations = await storage.getConversationsBySession(sessionId);
      res.json(conversations);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/conversations/:id", async (req, res) => {
    try {
      const conversation = await storage.getConversation(req.params.id);
      if (!conversation) {
        return res.status(404).json({ error: "Conversation not found" });
      }
      res.json(conversation);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/conversations/:id/messages", async (req, res) => {
    try {
      const messages = await storage.getMessagesByConversation(req.params.id);
      res.json(messages);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/conversations/:id/messages", async (req, res) => {
    try {
      const conversationId = req.params.id;
      const conversation = await storage.getConversation(conversationId);
      
      if (!conversation) {
        return res.status(404).json({ error: "Conversation not found" });
      }

      const data = insertMessageSchema.parse({
        conversationId,
        role: "user",
        content: req.body.content,
      });

      const userMessage = await storage.createMessage(data);

      const messages = await storage.getMessagesByConversation(conversationId);
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      }));

      const personaContext = {
        name: "Socrates",
        era: "Ancient Greece, 470-399 BCE",
        title: "Philosopher and Father of Western Philosophy",
        bio: "Known for the Socratic method of questioning, emphasis on ethics and self-knowledge. Never wrote anything down; teachings preserved through Plato's dialogues.",
      };

      const aiResponse = await generatePersonaResponse(
        personaContext,
        req.body.content,
        conversationHistory
      );

      const assistantMessage = await storage.createMessage({
        conversationId,
        role: "assistant",
        content: aiResponse,
      });

      res.json({ userMessage, assistantMessage });
    } catch (error: any) {
      console.error("Error in message creation:", error);
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
