import { rest } from "msw";
import { REACT_APP_URL_API } from "@env";

const routes = {
  users: "users/",
  login: "login/",
};

export const handlers = [
  rest.post(
    `${REACT_APP_URL_API}${routes.users}${routes.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "asdjfh3425kjlhsafkdh3k2h32" }))
  ),
];