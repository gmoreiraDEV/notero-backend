import { prisma } from "@config/database";
import { compareHash } from "@lib/hash";
import { Request } from "express";
import passport from "passport";

import { Strategy as LocalStrategy } from "passport-local";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      // if the user exists
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
          email: true,
          name: true,
          password: true,
          role: true,
        },
      });

      // if the credential is valid
      if (user && compareHash(password, user.password)) {
        const newUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
        done(null, user);
      } else {
        done(null, false);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (_: Request, id: string, done: any) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
