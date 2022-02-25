import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const database = () => {
  prisma
    .$connect()
    .then(() => console.log("[DB]: Connected"))
    .catch((e) => console.log(e));
};
