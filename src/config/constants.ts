import { genSaltSync } from "bcryptjs";

const ENV_SALT = Number(process.env.ENV_SALT);
const ENV_TOKEN_SECRET = String(process.env.TOKEN_SECRET);
const ENV_SESSION_SECRET = String(process.env.SESSION_SECRET);

export const PORT = 3000;
export const SALT = genSaltSync(ENV_SALT);
export const TOKEN_SECRET = ENV_TOKEN_SECRET;
export const SESSION_SECRET = ENV_SESSION_SECRET;
