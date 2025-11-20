import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConversationSchema, insertMessageSchema } from "@shared/schema";
import { generatePersonaResponse, PersonaContext } from "./openai";

interface SessionRequest extends Request {
  session: {
    id: string;
  };
}

const personaDatabase: Record<number, PersonaContext> = {
  1: {
    name: "Simone de Beauvoir",
    era: "1908-1986 CE",
    title: "Existentialist Feminist",
    bio: "One is not born, but rather becomes, a woman. Groundbreaking philosopher who challenged gender roles through existentialist lens. Author of 'The Second Sex', explored freedom, ethics, and women's oppression."
  },
  2: {
    name: "Socrates",
    era: "469-399 BCE",
    title: "Father of Western Philosophy",
    bio: "The unexamined life is not worth living. Known for the Socratic method of questioning, emphasis on ethics and self-knowledge. Never wrote anything down; teachings preserved through Plato's dialogues."
  },
  3: {
    name: "Jesus Christ",
    era: "1st Century CE",
    title: "Central Figure of Christianity",
    bio: "Teacher of love, compassion, and spiritual transformation. Preached the Kingdom of God, Sermon on the Mount, parables about mercy and redemption. Central to Christian faith and Western civilization."
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/conversations", async (req, res) => {
    const sessionReq = req as SessionRequest;
    try {
      const sessionId = sessionReq.session?.id || "default-session";
      const data = insertConversationSchema.omit({ sessionId: true }).parse(sessionReq.body);
      
      const conversation = await storage.createConversation({
        ...data,
        sessionId,
      });
      
      res.json(conversation);
    } catch (error: any) {
      console.error("Error creating conversation:", error);
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/conversations", async (req, res) => {
    const sessionReq = req as SessionRequest;
    try {
      const sessionId = sessionReq.session?.id || "default-session";
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
      const conversationHistory = messages
        .filter(msg => msg.role === "user" || msg.role === "assistant")
        .map(msg => ({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        }));

      const personaContext = personaDatabase[conversation.figureId];
      if (!personaContext) {
        return res.status(404).json({ error: "Persona not found" });
      }

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
