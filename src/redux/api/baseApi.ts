import { createApi } from "@reduxjs/toolkit/query/react";
import instance from "@/utils/axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ETagTypes } from "@/constants/tagTypes";

export interface AxiosErrorResponse {
  status: string;
  message: string;
  errors: string[];
}

const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig, AxiosResponse, unknown> =>
  async (config) => {
    try {
      const result = await instance(config);
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  tagTypes: Object.values(ETagTypes),
  endpoints: () => ({}),
  keepUnusedDataFor: 0,
});

export default baseApi;
