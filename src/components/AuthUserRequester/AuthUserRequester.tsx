"use client";
import {
  useGetAuthUserQuery,
  useLazyGetAuthUserQuery,
} from "@/redux/api/auth/auth.api";
import { authSlice } from "@/redux/slices/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AuthUserRequester({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useGetAuthUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    // const loadUser = async () => {
    //   let userResponse = await getAuthUserHandler();
    //   if (userResponse.data) {
    //     dispatch(authSlice.actions.authUserData(userResponse.data));
    //     dispatch(authSlice.actions.loggedIn());
    //   }
    // };
    // loadUser();
    if (data) {
      dispatch(authSlice.actions.authUserData(data));
      dispatch(authSlice.actions.loggedIn());
    }
  }, [data]);
  return children;
}
