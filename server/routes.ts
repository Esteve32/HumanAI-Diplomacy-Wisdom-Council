import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConversationSchema, insertMessageSchema, insertAiDialogueSchema, insertActivityLogSchema } from "@shared/schema";
import { generatePersonaResponse, generateDialogueResponse, PersonaContext } from "./openai";
import { sendActivityNotification } from "./email";
import type { Session } from "express-session";

interface SessionRequest extends Request {
  session: Session & {
    isAdmin?: boolean;
  };
}

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const sessionReq = req as SessionRequest;
  if (sessionReq.session?.isAdmin) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
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
    name: "Jesus of Nazareth",
    era: "c. 4 BCE - 30 CE",
    title: "Teacher of Compassion",
    bio: "Love your neighbor as yourself. Spiritual teacher whose message of love, forgiveness, and compassion transformed civilization. Preached the Kingdom of God, Sermon on the Mount, parables about mercy and redemption. Central to Christian faith and Western civilization."
  },
  4: {
    name: "Rosa Parks",
    era: "1913-2005 CE",
    title: "Mother of the Civil Rights Movement",
    bio: "I would like to be remembered as a person who wanted to be free. Her refusal to give up her bus seat on a Montgomery bus sparked the Montgomery Bus Boycott, a pivotal moment in the American Civil Rights Movement. Quiet strength and dignified resistance against racial segregation."
  },
  5: {
    name: "Rumi",
    era: "1207-1273 CE",
    title: "Sufi Mystic & Poet",
    bio: "The wound is the place where light enters you. Persian poet and Sufi mystic whose poetry speaks of divine love, spiritual transformation, and the unity of all beings. His works transcend religious and cultural boundaries, offering timeless wisdom about love, loss, and the soul's journey."
  },
  6: {
    name: "Maria Montessori",
    era: "1870-1952 CE",
    title: "Revolutionary Educator",
    bio: "Follow the child. Pioneering educator who revolutionized early childhood education through her philosophy of child-led learning. Creator of the Montessori Method emphasizing independence, hands-on learning, and respect for children's natural development."
  },
  7: {
    name: "bell hooks",
    era: "1952-2021 CE",
    title: "Intersectional Feminist",
    bio: "Love as the practice of freedom. Groundbreaking feminist theorist who explored intersections of race, gender, class, and sexuality. Advocate for transformative education and engaged pedagogy. Her work bridges academic theory and everyday experience."
  },
  8: {
    name: "Mary Wollstonecraft",
    era: "1759-1797 CE",
    title: "Mother of Feminism",
    bio: "I do not wish women to have power over men, but over themselves. Early feminist philosopher and author of 'A Vindication of the Rights of Woman'. Argued for women's education and equality, challenging 18th-century assumptions about gender roles."
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/conversations", async (req, res) => {
    const sessionReq = req as SessionRequest;
    try {
      const sessionId = sessionReq.sessionID || "default-session";
      const data = insertConversationSchema.omit({ sessionId: true }).parse(sessionReq.body);
      
      const conversation = await storage.createConversation({
        ...data,
        sessionId,
      });

      // Send notification email
      await sendActivityNotification("chat-created", null, {
        "Figure ID": data.figureId,
        "Conversation ID": conversation.id,
      });
      
      res.json(conversation);
    } catch (error: any) {
      console.error("Error creating conversation:", error);
      res.status(400).json({ error: error.message });
    }
  });

  app.post("/api/votes", async (req, res) => {
    const sessionReq = req as SessionRequest;
    try {
      const { figureId } = req.body;
      const sessionId = sessionReq.sessionID || "default-session";

      // Log the vote activity
      await storage.createActivityLog({
        activityType: "vote-figure",
        email: null,
        data: JSON.stringify({ figureId }),
        sessionId,
      });

      // Get figure name for email context
      const figures = await storage.getWiseFigures();
      const figure = figures.find(f => f.id === figureId);
      const figureName = figure?.name || `Figure ${figureId}`;

      // Send notification email
      await sendActivityNotification("vote-figure", null, {
        "Figure": figureName,
        "Figure ID": figureId,
      });

      res.json({ success: true });
    } catch (error: any) {
      console.error("Error recording vote:", error);
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/conversations", async (req, res) => {
    const sessionReq = req as SessionRequest;
    try {
      const sessionId = sessionReq.sessionID || "default-session";
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

  app.post("/api/ai-dialogues", async (req, res) => {
    const sessionReq = req as SessionRequest;
    try {
      const sessionId = sessionReq.sessionID || "default-session";
      const data = insertAiDialogueSchema.omit({ sessionId: true }).parse(req.body);
      
      const dialogue = await storage.createAiDialogue({
        ...data,
        sessionId,
      });

      const persona1 = personaDatabase[dialogue.persona1Id];
      const persona2 = personaDatabase[dialogue.persona2Id];
      
      if (!persona1 || !persona2) {
        return res.status(404).json({ error: "One or both personas not found" });
      }

      // Send notification email
      await sendActivityNotification("ai-dialogue-created", null, {
        "Persona 1": persona1.name,
        "Persona 2": persona2.name,
        "Topic": dialogue.topic,
      });

      const conversationHistory: Array<{ personaId: number; content: string }> = [];
      
      for (let i = 0; i < 5; i++) {
        const currentPersonaId = i % 2 === 0 ? dialogue.persona1Id : dialogue.persona2Id;
        const currentPersona = i % 2 === 0 ? persona1 : persona2;
        const otherPersonaId = i % 2 === 0 ? dialogue.persona2Id : dialogue.persona1Id;
        const otherPersona = i % 2 === 0 ? persona2 : persona1;
        
        const response = await generateDialogueResponse(
          currentPersonaId,
          currentPersona,
          otherPersonaId,
          otherPersona,
          dialogue.topic,
          conversationHistory
        );
        
        await storage.createDialogueMessage({
          dialogueId: dialogue.id,
          personaId: currentPersonaId,
          content: response,
        });
        
        conversationHistory.push({ personaId: currentPersonaId, content: response });
      }
      
      res.json(dialogue);
    } catch (error: any) {
      console.error("Error creating AI dialogue:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/ai-dialogues/:id/messages", async (req, res) => {
    try {
      const messages = await storage.getDialogueMessages(req.params.id);
      res.json(messages);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/track-click", async (req, res) => {
    const sessionReq = req as SessionRequest;
    try {
      const { email, cta, consentGiven } = req.body;
      const sessionId = sessionReq.sessionID || "default-session";
      
      await storage.createActivityLog({
        activityType: cta,
        email: email || null,
        data: JSON.stringify({ consentGiven }),
        sessionId,
      });

      console.log("📊 Activity logged:", cta, email);

      // Send notification email via Resend
      await sendActivityNotification(cta, email || null, {
        "GDPR Consent": consentGiven ? "Yes" : "No",
      });

      res.json({ success: true });
    } catch (error: any) {
      console.error("Error tracking click:", error);
      res.status(400).json({ error: error.message });
    }
  });

  app.post("/api/admin/login", async (req, res) => {
    const sessionReq = req as SessionRequest;
    try {
      const { password } = req.body;
      const adminPassword = process.env.ADMIN_PASSWORD;
      
      if (!adminPassword) {
        return res.status(500).json({ error: "Admin password not configured" });
      }
      
      if (password === adminPassword) {
        sessionReq.session.regenerate((err) => {
          if (err) {
            console.error("Session regeneration error:", err);
            return res.status(500).json({ error: "Session error" });
          }
          sessionReq.session.isAdmin = true;
          sessionReq.session.save((saveErr) => {
            if (saveErr) {
              console.error("Session save error:", saveErr);
              return res.status(500).json({ error: "Session save error" });
            }
            res.json({ success: true });
          });
        });
      } else {
        res.status(401).json({ error: "Invalid password" });
      }
    } catch (error: any) {
      console.error("Error during admin login:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/admin/logout", async (req, res) => {
    const sessionReq = req as SessionRequest;
    sessionReq.session.isAdmin = false;
    res.json({ success: true });
  });

  app.get("/api/admin/check", async (req, res) => {
    const sessionReq = req as SessionRequest;
    res.json({ isAdmin: !!sessionReq.session?.isAdmin });
  });

  app.get("/api/admin/activity-logs", requireAdmin, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 100;
      const logs = await storage.getActivityLogs(limit);
      res.json(logs);
    } catch (error: any) {
      console.error("Error fetching activity logs:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/admin/daily-digest", requireAdmin, async (req, res) => {
    try {
      const days = req.query.days ? parseInt(req.query.days as string) : 7;
      const endDate = Date.now();
      const startDate = endDate - (days * 24 * 60 * 60 * 1000);
      
      const logs = await storage.getActivityLogsByDateRange(startDate, endDate);
      res.json(logs);
    } catch (error: any) {
      console.error("Error fetching daily digest:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/admin/stats", requireAdmin, async (req, res) => {
    try {
      const conversations = await storage.getConversationsBySession("all");
      const activityLogs = await storage.getActivityLogs();
      const wiseFigures = await storage.getWiseFigures();
      
      const stats = {
        totalConversations: conversations.length,
        totalActivities: activityLogs.length,
        totalVotes: wiseFigures.reduce((sum, fig) => sum + fig.votes, 0),
        uniqueEmails: new Set(activityLogs.filter(log => log.email).map(log => log.email)).size,
      };
      
      res.json(stats);
    } catch (error: any) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
