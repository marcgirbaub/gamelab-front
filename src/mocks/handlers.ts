import { rest } from "msw";
import { REACT_APP_URL_API } from "@env";
import urlRoutes from "../hooks/routes";
import { mockListOfGames } from "./gamesMocks";

const { games, users } = urlRoutes;

export const handlers = [
  rest.post(
    `${REACT_APP_URL_API}${users.users}${users.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "asdjfh3425kjlhsafkdh3k2h32" }))
  ),
  rest.post(
    `${REACT_APP_URL_API}${users.users}${users.register}`,
    async (req, res, ctx) => res(ctx.status(201))
  ),
  rest.get(`${REACT_APP_URL_API}${games.games}`, async (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ games: mockListOfGames }))
  ),
];

export const errorHandlers = [
  rest.post(
    `${REACT_APP_URL_API}${users.users}${users.login}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),
  rest.post(
    `${REACT_APP_URL_API}${users.users}${users.register}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),
  rest.get(`${REACT_APP_URL_API}${games.games}`, async (req, res, ctx) =>
    res(ctx.status(500))
  ),
];
