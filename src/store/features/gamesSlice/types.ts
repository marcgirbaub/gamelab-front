export interface Game {
  name: string;
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
