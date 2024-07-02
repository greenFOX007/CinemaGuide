import { ETagTypes } from "@/constants/tagTypes";
import {
  AddFavoritesMovie,
  GetFavorites,
  GetGenreMovies,
  GetGenres,
  GetMovieById,
  GetMoviesWithParams,
  GetRandomMovie,
  GetTopTenMovies,
  RemoveFavoritesMovie,
} from "./movies.namespaces";
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
      GetMoviesWithParams.Response,
      GetMoviesWithParams.Payload
    >({
      query: (data) => ({
        method: "GET",
        url: `/movie?${data}`,
      }),
      providesTags: [ETagTypes.GET_MOVIE_WITH_PARAMS],
    }),
    getMovieById: builder.query<GetMovieById.Response, GetMovieById.Payload>({
      query: (data) => ({
        method: "GET",
        url: `/movie/${data}`,
      }),
      providesTags: [ETagTypes.GET_MOVIE_WITH_PARAMS],
    }),
    getGenreMovies: builder.query<
      GetGenreMovies.Response,
      GetGenreMovies.Payload
    >({
      query: ({ genre, page = 1 }) => ({
        method: "GET",
        url: `/movie?genre=${genre}&count=15&page=${page}`,
      }),
    }),
    getTopMovies: builder.query<
      GetTopTenMovies.Response,
      GetTopTenMovies.Payload
    >({
      query: () => ({
        method: "GET",
        url: "/movie/top10",
      }),
    }),
    getGenres: builder.query<GetGenres.Response, GetGenres.Payload>({
      query: () => ({
        method: "GET",
        url: "/movie/genres",
      }),
    }),
    addFavorites: builder.mutation<
      AddFavoritesMovie.Response,
      AddFavoritesMovie.Payload
    >({
      query: (data) => ({
        method: "POST",
        url: "/favorites",
        data,
      }),
      invalidatesTags: [ETagTypes.ADD_FAVORITES],
    }),
    removeFavoriteMovie: builder.mutation<
      RemoveFavoritesMovie.Response,
      RemoveFavoritesMovie.Payload
    >({
      query: (id) => ({
        method: "DELETE",
        url: `/favorites/${id}`,
      }),
      invalidatesTags: [ETagTypes.REMOVE_FAVORITES],
    }),
    getFavorites: builder.query<GetFavorites.Response, GetFavorites.Payload>({
      query: () => ({
        method: "GET",
        url: "/favorites",
      }),
      providesTags: [ETagTypes.REMOVE_FAVORITES, ETagTypes.ADD_FAVORITES],
    }),
  }),
});

export const {
  useGetRandomMovieQuery,
  useLazyGetMoviesWithParamsQuery,
  useGetMoviesWithParamsQuery,
  useGetMovieByIdQuery,
  useLazyGetMovieByIdQuery,
  useLazyGetRandomMovieQuery,
  useGetTopMoviesQuery,
  useGetGenresQuery,
  useGetGenreMoviesQuery,
  useAddFavoritesMutation,
  useGetFavoritesQuery,
  useRemoveFavoriteMovieMutation,
} = moviesApi;
