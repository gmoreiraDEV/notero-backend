import { prisma } from "@config/database";
import { Request, Response } from "express";

export class FindUserByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    // TODO
    // Verificação de autenticação e autorização
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
      response.status(200).json(user);
    } catch (error) {
      response.status(404).json({
        message: `${error} - NotFound`,
      });
    }
  }
}
