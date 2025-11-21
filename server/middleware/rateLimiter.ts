import type { Request, Response, NextFunction } from "express";
import type { Session } from "express-session";
import { storage } from "../storage";

interface SessionRequest extends Request {
  session: Session & {
    isAdmin?: boolean;
  };
}

const RATE_LIMITS = {
  "/api/conversations/:id/messages": { maxRequests: 10, windowMs: 60000 }, // 10 messages per minute
  "/api/ai-dialogues": { maxRequests: 5, windowMs: 60000 }, // 5 dialogues per minute
  "/api/votes": { maxRequests: 20, windowMs: 60000 }, // 20 votes per minute
};

export async function rateLimiter(req: Request, res: Response, next: NextFunction) {
  const sessionReq = req as SessionRequest;
  const sessionId = sessionReq.sessionID || "default-session";
  
  const endpoint = req.path.replace(/\/[a-zA-Z0-9-]+$/, "/:id");
  const limit = RATE_LIMITS[endpoint as keyof typeof RATE_LIMITS];
  
  if (!limit) {
    return next();
  }

  const allowed = await storage.checkRateLimit(
    sessionId,
    endpoint,
    limit.maxRequests,
    limit.windowMs
  );

  if (!allowed) {
    return res.status(429).json({
      error: "Rate limit exceeded",
      message: "You're sending messages too quickly. Please wait a moment before trying again.",
      retryAfter: Math.ceil(limit.windowMs / 1000),
    });
  }

  await storage.incrementRateLimit(sessionId, endpoint);
  next();
}
