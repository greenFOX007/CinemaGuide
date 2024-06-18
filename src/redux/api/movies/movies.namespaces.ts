import {
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
