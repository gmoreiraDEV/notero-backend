import { SESSION_SECRET } from "@config/constants";
import { prisma } from "@config/database";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { NextFunction, Request, Response } from "express";
import session, { MemoryStore } from "express-session";

const sessionMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  return session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })(request, response, next);
};

export default sessionMiddleware;
