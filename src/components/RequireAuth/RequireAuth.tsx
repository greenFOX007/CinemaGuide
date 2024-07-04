"use client";

import {
  useGetAuthUserQuery,
  useLazyGetAuthUserQuery,
} from "@/redux/api/auth/auth.api";
import { authSlice, useAuthSelector } from "@/redux/slices/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useRouter();
  const { isAuthenticated } = useAuthSelector();

  // const [getAuthUserHandler] = useLazyGetAuthUserQuery();
  const { data, isLoading } = useGetAuthUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    // const loadUser = async () => {
    //   let userResponse = await getAuthUserHandler();
    //   if (userResponse.data) {
    //     dispatch(authSlice.actions.authUserData(userResponse.data));
    //     dispatch(authSlice.actions.loggedIn());
    //   } else {
    //     location.push("/login");
    //   }
    // };
    // loadUser();
    if (!data && !isLoading) location.push("/login");
    if (data) {
      dispatch(authSlice.actions.authUserData(data));
      dispatch(authSlice.actions.loggedIn());
    }
  }, [data]);

  return isAuthenticated ? children : "";
}
