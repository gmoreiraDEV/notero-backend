import { prisma } from "@config/database";
import { compareHash } from "@lib/hash";
import { generateAccessToken } from "@lib/jwt";
import { NextFunction, Request, Response } from "express";
import passport from "passport";

export class SignInController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    passport.authenticate("local", (err, user, info) => {
      if (!user) {
        return response.status(401).json({
          message: "Email or Password is not matched",
        });
      }

      request.login(user, (error) => {
        if (error) throw error;
        return response.status(201).json({ user });
      });
    })(request, response, next);
  }
}
