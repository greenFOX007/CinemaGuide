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
  trailerYouTubeId: string;
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

export type IGetMoviesWithParamsPayload = string;
export type IGetMoviesWithParamsResponse = Array<Movie>;

export type IGetGenreMoviePayload = {
  genre: string;
  page: number;
};
export type IGetGenreMovieResponse = Array<Movie>;

export type IGetTopTenMoviesPayload = void;
export type IGetTopTenMoviesResponse = Array<Movie>;

export type IGetGenresPayload = void;
export type IGetGenresResponse = Array<string>;

export type IGetMovieByIdPayload = number;
export type IGetMovieByIdResponse = Movie;

export type IAddFavoritesMoviePayload = { id: string };
export type IAddFavoritesMovieResponse = void;

export type IGetFavoritesPayload = void;
export type IGetFavoritesResponse = Array<Movie>;

export type IRemoveFavoritesMoviePayload = number;
export type IRemoveFavoritesMovieResponse = void;
