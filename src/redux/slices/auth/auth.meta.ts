import { TAuthState } from "./auth.types";

export const SLICE_NAME = "authSlice";

export const INITIAL_STATE: TAuthState = {
  isAuthenticated: false,
  authUser: null,
};
