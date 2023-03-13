import { type Games } from "../../redux/features/games/types";

export interface GamesResponse {
  games: Games;
  totalNumberPages: number;
}
