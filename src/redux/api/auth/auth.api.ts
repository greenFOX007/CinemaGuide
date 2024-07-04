import { ETagTypes } from "@/constants/tagTypes";
import baseApi from "../baseApi";
import { GetAuthUser, Login, Logout, Registration } from "./auth.namespaces";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<Registration.Response, Registration.Payload>(
      {
        query: ({ data }) => ({
          method: "POST",
          url: "/user",
          data,
        }),
        invalidatesTags: [],
      }
    ),
    login: builder.mutation<Login.Response, Login.Payload>({
      query: ({ data }) => ({
        method: "POST",
        url: "/auth/login",
        data,
      }),
      invalidatesTags: [ETagTypes.GET_AUTH_USER],
    }),
    getAuthUser: builder.query<GetAuthUser.Response, GetAuthUser.Payload>({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: [ETagTypes.GET_AUTH_USER, ETagTypes.ADD_FAVORITES],
    }),
    logout: builder.query<Logout.Response, Logout.Payload>({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useGetAuthUserQuery,
  useLazyGetAuthUserQuery,
  useLazyLogoutQuery,
} = authApi;
