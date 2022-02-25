import { Request, Response } from "express";

export class MeController {
  async handle(request: Request, response: Response): Promise<void> {
    if (request.isAuthenticated()) {
      response.status(200).json(request.user);
    } else {
      response.status(401).json({ user: null });
    }
  }
}
