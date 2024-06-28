import {
  IGetGenreMoviePayload,
  IGetGenreMovieResponse,
  IGetGenresPayload,
  IGetGenresResponse,
  IGetMovieByIdPayload,
  IGetMovieByIdResponse,
  IGetMoviesWithParamsPayload,
  IGetMoviesWithParamsResponse,
  IGetRandomMoviePayload,
  IGetRandomMovieResponse,
  IGetTopTenMoviesPayload,
  IGetTopTenMoviesResponse,
} from "./movies.types";

export namespace GetRandomMovie {
  export type Payload = IGetRandomMoviePayload;
  export type Response = IGetRandomMovieResponse;
}

export namespace GetMoviesWithParams {
  export type Payload = IGetMoviesWithParamsPayload;
  export type Response = IGetMoviesWithParamsResponse;
}

export namespace GetMovieById {
  export type Payload = IGetMovieByIdPayload;
  export type Response = IGetMovieByIdResponse;
}

export namespace GetTopTenMovies {
  export type Payload = IGetTopTenMoviesPayload;
  export type Response = IGetTopTenMoviesResponse;
}

export namespace GetGenres {
  export type Payload = IGetGenresPayload;
  export type Response = IGetGenresResponse;
}

export namespace GetGenreMovies {
  export type Payload = IGetGenreMoviePayload;
  export type Response = IGetGenreMovieResponse;
}
