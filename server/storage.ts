import { 
  type WiseFigure, 
  type InsertWiseFigure, 
  type Vote, 
  type InsertVote,
  type Conversation,
  type InsertConversation,
  type Message,
  type InsertMessage,
  type AiDialogue,
  type InsertAiDialogue,
  type DialogueMessage,
  type InsertDialogueMessage,
  type ActivityLog,
  type InsertActivityLog
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getWiseFigures(): Promise<WiseFigure[]>;
  getWiseFigure(id: string): Promise<WiseFigure | undefined>;
  createWiseFigure(figure: InsertWiseFigure): Promise<WiseFigure>;
  voteForFigure(figureId: string, sessionId: string): Promise<boolean>;
  getVotesBySession(sessionId: string): Promise<Vote[]>;
  
  createConversation(conversation: InsertConversation): Promise<Conversation>;
  getConversation(id: string): Promise<Conversation | undefined>;
  getConversationsBySession(sessionId: string): Promise<Conversation[]>;
  
  createMessage(message: InsertMessage): Promise<Message>;
  getMessagesByConversation(conversationId: string): Promise<Message[]>;
  
  createAiDialogue(dialogue: InsertAiDialogue): Promise<AiDialogue>;
  getAiDialogue(id: string): Promise<AiDialogue | undefined>;
  
  createDialogueMessage(message: InsertDialogueMessage): Promise<DialogueMessage>;
  getDialogueMessages(dialogueId: string): Promise<DialogueMessage[]>;
  
  createActivityLog(log: InsertActivityLog): Promise<ActivityLog>;
  getActivityLogs(limit?: number): Promise<ActivityLog[]>;
  getActivityLogsByDateRange(startDate: number, endDate: number): Promise<ActivityLog[]>;
}

export class MemStorage implements IStorage {
  private wiseFigures: Map<string, WiseFigure>;
  private votes: Map<string, Vote>;
  private conversations: Map<string, Conversation>;
  private messages: Map<string, Message>;
  private aiDialogues: Map<string, AiDialogue>;
  private dialogueMessages: Map<string, DialogueMessage>;
  private activityLogs: Map<string, ActivityLog>;

  constructor() {
    this.wiseFigures = new Map();
    this.votes = new Map();
    this.conversations = new Map();
    this.messages = new Map();
    this.aiDialogues = new Map();
    this.dialogueMessages = new Map();
    this.activityLogs = new Map();
  }

  async getWiseFigures(): Promise<WiseFigure[]> {
    return Array.from(this.wiseFigures.values()).sort((a, b) => b.votes - a.votes);
  }

  async getWiseFigure(id: string): Promise<WiseFigure | undefined> {
    return this.wiseFigures.get(id);
  }

  async createWiseFigure(insertFigure: InsertWiseFigure): Promise<WiseFigure> {
    const id = randomUUID();
    const figure: WiseFigure = { ...insertFigure, id, votes: 0, chatGptLink: insertFigure.chatGptLink ?? null };
    this.wiseFigures.set(id, figure);
    return figure;
  }

  async voteForFigure(figureId: string, sessionId: string): Promise<boolean> {
    const figure = this.wiseFigures.get(figureId);
    if (!figure) return false;

    const voteId = randomUUID();
    const vote: Vote = { id: voteId, figureId, sessionId };
    this.votes.set(voteId, vote);

    figure.votes += 1;
    this.wiseFigures.set(figureId, figure);

    return true;
  }

  async getVotesBySession(sessionId: string): Promise<Vote[]> {
    return Array.from(this.votes.values()).filter(
      (vote) => vote.sessionId === sessionId,
    );
  }

  async createConversation(insertConversation: InsertConversation): Promise<Conversation> {
    const id = randomUUID();
    const conversation: Conversation = { ...insertConversation, id, createdAt: Date.now() };
    this.conversations.set(id, conversation);
    return conversation;
  }

  async getConversation(id: string): Promise<Conversation | undefined> {
    return this.conversations.get(id);
  }

  async getConversationsBySession(sessionId: string): Promise<Conversation[]> {
    return Array.from(this.conversations.values())
      .filter((conv) => conv.sessionId === sessionId)
      .sort((a, b) => b.createdAt - a.createdAt);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = randomUUID();
    const message: Message = { ...insertMessage, id, createdAt: Date.now() };
    this.messages.set(id, message);
    return message;
  }

  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter((msg) => msg.conversationId === conversationId)
      .sort((a, b) => a.createdAt - b.createdAt);
  }

  async createAiDialogue(insertDialogue: InsertAiDialogue): Promise<AiDialogue> {
    const id = randomUUID();
    const dialogue: AiDialogue = { ...insertDialogue, id, createdAt: Date.now() };
    this.aiDialogues.set(id, dialogue);
    return dialogue;
  }

  async getAiDialogue(id: string): Promise<AiDialogue | undefined> {
    return this.aiDialogues.get(id);
  }

  async createDialogueMessage(insertMessage: InsertDialogueMessage): Promise<DialogueMessage> {
    const id = randomUUID();
    const message: DialogueMessage = { ...insertMessage, id, createdAt: Date.now() };
    this.dialogueMessages.set(id, message);
    return message;
  }

  async getDialogueMessages(dialogueId: string): Promise<DialogueMessage[]> {
    return Array.from(this.dialogueMessages.values())
      .filter((msg) => msg.dialogueId === dialogueId)
      .sort((a, b) => a.createdAt - b.createdAt);
  }

  async createActivityLog(insertLog: InsertActivityLog): Promise<ActivityLog> {
    const id = randomUUID();
    const log: ActivityLog = { 
      ...insertLog, 
      id, 
      createdAt: Date.now(),
      sessionId: insertLog.sessionId || null,
      email: insertLog.email || null
    };
    this.activityLogs.set(id, log);
    return log;
  }

  async getActivityLogs(limit?: number): Promise<ActivityLog[]> {
    const logs = Array.from(this.activityLogs.values())
      .sort((a, b) => b.createdAt - a.createdAt);
    return limit ? logs.slice(0, limit) : logs;
  }

  async getActivityLogsByDateRange(startDate: number, endDate: number): Promise<ActivityLog[]> {
    return Array.from(this.activityLogs.values())
      .filter((log) => log.createdAt >= startDate && log.createdAt <= endDate)
      .sort((a, b) => b.createdAt - a.createdAt);
  }
}

export const storage = new MemStorage();
