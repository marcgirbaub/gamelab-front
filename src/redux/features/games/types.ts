export interface GameStrucutre {
  id?: string;
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
  createdBy?: string;
}

export type GamesStructure = GameStrucutre[];

export interface GamesState {
  games: GamesStructure;
  selectedGame: GameStrucutre;
  createdByUserGames?: GamesStructure;
}

export interface GetOneGameResponse {
  game: GameStrucutre;
}

export interface UserGamesResponse {
  games: GamesStructure;
}

export interface UpdateGameResponse {
  game: GameStrucutre;
}
