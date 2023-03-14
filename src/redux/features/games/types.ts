export interface Game {
  id: string;
  name: string;
  image: string;
  backupImage: string;
  about: string;
  platforms: string[];
  categories: string[];
  gameplayTime: number;
  releaseYear: number;
  developer: string;
  ageRating: string;
}

export type Games = Game[];

export interface GamesState {
  games: Games;
  selectedGame: Game;
}
