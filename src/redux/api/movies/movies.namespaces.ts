import {
  IGetGenresPayload,
  IGetGenresResponse,
  IGetMovieWithParamsPayload,
  IGetMovieWithParamsResponse,
  IGetRandomMoviePayload,
  IGetRandomMovieResponse,
  IGetTopTenMoviesPayload,
  IGetTopTenMoviesResponse,
} from "./movies.types";

export namespace GetRandomMovie {
  export type Payload = IGetRandomMoviePayload;
  export type Response = IGetRandomMovieResponse;
}

export namespace GetMovieWithParams {
  export type Payload = IGetMovieWithParamsPayload;
  export type Response = IGetMovieWithParamsResponse;
}

export namespace GetTopTenMovies {
  export type Payload = IGetTopTenMoviesPayload;
  export type Response = IGetTopTenMoviesResponse;
}

export namespace GetGenres {
  export type Payload = IGetGenresPayload;
  export type Response = IGetGenresResponse;
}
