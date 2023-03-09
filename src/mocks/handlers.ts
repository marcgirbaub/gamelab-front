import { rest } from "msw";
import { REACT_APP_URL_API } from "@env";

const routes = {
  users: "users/",
  login: "login/",
  register: "register/",
};

export const handlers = [
  rest.post(
    `${REACT_APP_URL_API}${routes.users}${routes.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "asdjfh3425kjlhsafkdh3k2h32" }))
  ),
  rest.post(
    `${REACT_APP_URL_API}${routes.users}${routes.register}`,
    async (req, res, ctx) => res(ctx.status(201))
  ),
];

export const errorHandlers = [
  rest.post(
    `${REACT_APP_URL_API}${routes.users}${routes.login}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),
  rest.post(
    `${REACT_APP_URL_API}${routes.users}${routes.register}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),
];
