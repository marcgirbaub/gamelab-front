import { type GamesStructure } from "../../redux/features/games/types";

export interface GamesResponse {
  games: GamesStructure;
  totalNumberPages: number;
}

export interface GameFormData {
  name: string;
  image: unknown;
  about: string;
  platforms: string[];
  categories: string[];
  gameplayTime: number;
  releaseYear: number;
  developer: string;
  ageRating: string;
}
