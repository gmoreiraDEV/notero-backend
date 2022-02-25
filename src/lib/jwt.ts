import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "@config/constants";

export const generateAccessToken = (email: string): string => {
  return jwt.sign({ email }, TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
