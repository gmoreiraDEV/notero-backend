import router from "@routes";
import express from "express";
import sessionMiddleware from "@middlewares/session.middleware";
import passport from "@middlewares/passport.middleware";

const server = express();
server.use(express.json());

server.use(sessionMiddleware);

server.use(passport.initialize());
server.use(passport.session());

server.use(router);

export { server };
