"use client";

import { useLazyGetAuthUserQuery } from "@/redux/api/auth/auth.api";
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

  const [getAuthUserHandler, { isSuccess }] = useLazyGetAuthUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadUser = async () => {
      let userResponse = await getAuthUserHandler();
      if (isSuccess && userResponse.data) {
        dispatch(authSlice.actions.authUserData(userResponse.data));
        dispatch(authSlice.actions.loggedIn());
      } else {
        location.push("/");
      }
    };
    loadUser();
  }, []);

  return isAuthenticated ? children : "";
}
