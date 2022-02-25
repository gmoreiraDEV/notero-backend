import { meController } from "@useCases/Auth/Me";
import { signInController } from "@useCases/Auth/SignIn";
import { NextFunction, Request, Response, Router } from "express";

const authRouter = Router();

authRouter.post(
  "/signin",
  (request: Request, response: Response, next: NextFunction) => {
    return signInController.handle(request, response, next);
  }
);

authRouter.get("/me", (request: Request, response: Response) => {
  return meController.handle(request, response);
});

export { authRouter };
