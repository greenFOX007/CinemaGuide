import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, SLICE_NAME } from "./auth.meta";
import { authUserdata } from "./auth.types";
import { AppDispatch } from "@/redux/store";

export const authSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    authUserData: (state, action: PayloadAction<authUserdata | null>) => {
      state.authUser = action.payload;
    },
    loggedIn: (state) => {
      state.isAuthenticated = true;
    },
    loggedOut: (state) => {
      state.isAuthenticated = false;
    },
  },
});

const logout = () => async (dispatch: AppDispatch) => {
  dispatch(authUserData(null));
};

export const { authUserData, loggedIn, loggedOut, logoutAction } = {
  ...authSlice.actions,
  logoutAction: logout,
};

export default authSlice.reducer;
