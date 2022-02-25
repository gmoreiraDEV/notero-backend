import { prisma } from "@config/database";
import { Request, Response } from "express";

export class FindAllUserController {
  async handle(request: Request, response: Response) {
    // console.log(request.isAuthenticated());
    // console.log("teste", request.user);

    // TODO
    // Verificação de autenticação e autorização
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          name: true,
        },
      });
      response.status(200).json(users);
    } catch (error) {
      response.status(404).json({
        message: `${error} - NotFound`,
      });
    }
  }
}
