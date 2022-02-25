import { createUserController } from "@useCases/User/CreateUser";
import {
  findAllUsersController,
  findUserByIdController,
} from "@useCases/User/FindUser";
import { Request, Response, Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (request: Request, response: Response) => {
  return findAllUsersController.handle(request, response);
});

usersRouter.get("/:id", (request: Request, response: Response) => {
  return findUserByIdController.handle(request, response);
});

usersRouter.post("/", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export { usersRouter };
