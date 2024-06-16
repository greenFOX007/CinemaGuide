import { ETagTypes } from "@/constants/tagTypes";
import { GetMovieWithParams, GetRandomMovie } from "./movies.namespaces";
import baseApi from "../baseApi";

const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRandomMovie: builder.query<
      GetRandomMovie.Response,
      GetRandomMovie.Payload
    >({
      query: () => ({
        method: "GET",
        url: "/movie/random",
      }),
      providesTags: [ETagTypes.GET_RANDOM_MOVIE],
    }),
    getMoviesWithParams: builder.query<
      GetMovieWithParams.Response,
      GetMovieWithParams.Payload
    >({
      query: (data) => ({
        method: "GET",
        url: `/movie?${data}`,
      }),
      providesTags: [ETagTypes.GET_MOVIE_WITH_PARAMS],
    }),
  }),
});

export const {
  useGetRandomMovieQuery,
  useLazyGetMoviesWithParamsQuery,
  useLazyGetRandomMovieQuery,
} = moviesApi;
