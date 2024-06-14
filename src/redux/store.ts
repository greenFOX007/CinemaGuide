"use client";
import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import authSlice from "./slices/auth/auth.slice";

const createRootReducer = () => ({
  authReducer: authSlice,
  [baseApi?.reducerPath]: baseApi.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: { ...createRootReducer() },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        baseApi.middleware
      ),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
