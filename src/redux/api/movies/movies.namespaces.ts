import {
  IGetMovieWithParamsPayload,
  IGetMovieWithParamsResponse,
  IGetRandomMoviePayload,
  IGetRandomMovieResponse,
} from "./movies.types";

export namespace GetRandomMovie {
  export type Payload = IGetRandomMoviePayload;
  export type Response = IGetRandomMovieResponse;
}

export namespace GetMovieWithParams {
  export type Payload = IGetMovieWithParamsPayload;
  export type Response = IGetMovieWithParamsResponse;
}
