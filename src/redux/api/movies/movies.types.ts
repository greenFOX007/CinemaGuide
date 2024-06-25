export type Movie = {
  id: number;
  title: string;
  originalTitle: string;
  language: string;
  releaseYear: number;
  releaseDate: string;
  genres: [string];
  plot: string;
  runtime: number;
  budget: string;
  revenue: string;
  homepage: string;
  status: string;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl: string;
  trailerYoutubeId: string;
  tmdbRating: number;
  searchL: string;
  keywords: [string];
  countriesOfOrigin: [string];
  languages: [string];
  cast: [string];
  director: string;
  production: string;
  awardsSummary: string;
};

export type IGetRandomMovieResponse = Movie;

export type IGetRandomMoviePayload = void;

export type IGetMovieWithParamsPayload = string;
export type IGetMovieWithParamsResponse = Array<Movie>;

export type IGetTopTenMoviesPayload = void;
export type IGetTopTenMoviesResponse = Array<Movie>;

export type IGetGenresPayload = void;
export type IGetGenresResponse = Array<string>;
