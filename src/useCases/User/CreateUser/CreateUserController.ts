import { prisma } from "@config/database";
import { hash } from "@lib/hash";
import { Request, Response } from "express";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      return response.status(400).json({
        message: `Unexpected error.`,
      });
    }

    const passwordHashed = await hash(password);

    try {
      await prisma.user.create({
        data: { name, email, password: passwordHashed },
      });

      return response.status(201).json({ name, email });
    } catch (err) {
      return response.status(400).json({
        message: `${err} - Unexpected error.`,
      });
    }
  }
}
