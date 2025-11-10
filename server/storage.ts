import { type WiseFigure, type InsertWiseFigure, type Vote, type InsertVote } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getWiseFigures(): Promise<WiseFigure[]>;
  getWiseFigure(id: string): Promise<WiseFigure | undefined>;
  createWiseFigure(figure: InsertWiseFigure): Promise<WiseFigure>;
  voteForFigure(figureId: string, sessionId: string): Promise<boolean>;
  getVotesBySession(sessionId: string): Promise<Vote[]>;
}

export class MemStorage implements IStorage {
  private wiseFigures: Map<string, WiseFigure>;
  private votes: Map<string, Vote>;

  constructor() {
    this.wiseFigures = new Map();
    this.votes = new Map();
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
}

export const storage = new MemStorage();
