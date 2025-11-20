import { 
  type WiseFigure, 
  type InsertWiseFigure, 
  type Vote, 
  type InsertVote,
  type Conversation,
  type InsertConversation,
  type Message,
  type InsertMessage
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
}

export class MemStorage implements IStorage {
  private wiseFigures: Map<string, WiseFigure>;
  private votes: Map<string, Vote>;
  private conversations: Map<string, Conversation>;
  private messages: Map<string, Message>;

  constructor() {
    this.wiseFigures = new Map();
    this.votes = new Map();
    this.conversations = new Map();
    this.messages = new Map();
  }

  async getWiseFigures(): Promise<WiseFigure[]> {
    return Array.from(this.wiseFigures.values()).sort((a, b) => b.votes - a.votes);
  }

  async getWiseFigure(id: string): Promise<WiseFigure | undefined> {
    return this.wiseFigures.get(id);
  }

  async createWiseFigure(insertFigure: InsertWiseFigure): Promise<WiseFigure> {
    const id = randomUUID();
    const figure: WiseFigure = { ...insertFigure, id, votes: 0 };
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
}

export const storage = new MemStorage();
