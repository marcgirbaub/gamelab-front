import { rest } from "msw";
import { REACT_APP_URL_API } from "@env";
import urlRoutes from "../hooks/routes";
import {
  mockListOfGames,
  mockGameToCreate,
  mockGameToDelete,
  mockLeagueGame,
} from "./gamesMocks";

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

  rest.post(
    `${REACT_APP_URL_API}${games.games}${games.create}`,
    async (req, res, ctx) =>
      res(
        ctx.status(201),
        ctx.json({ ...mockGameToCreate, id: "1231sdfsadf23" })
      )
  ),
  rest.delete(
    `${REACT_APP_URL_API}${games.games}${games.delete}${mockGameToDelete.id!}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ ...mockGameToDelete }))
  ),

  rest.get(
    `${REACT_APP_URL_API}${games.games}${mockLeagueGame.id!}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ game: mockLeagueGame }))
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
  rest.post(
    `${REACT_APP_URL_API}${games.games}${games.create}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),
  rest.delete(
    `${REACT_APP_URL_API}${games.games}${games.delete}${mockGameToDelete.id!}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),
  rest.get(
    `${REACT_APP_URL_API}${games.games}${mockLeagueGame.id!}`,
    async (req, res, ctx) => res(ctx.status(404))
  ),
];
