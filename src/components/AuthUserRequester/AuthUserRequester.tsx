"use client";
import { useLazyGetAuthUserQuery } from "@/redux/api/auth/auth.api";
import { authSlice } from "@/redux/slices/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AuthUserRequester({
  children,
}: {
  children: React.ReactNode;
}) {
  const [getAuthUserHandler, { data }] = useLazyGetAuthUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadUser = async () => {
      let userResponse = await getAuthUserHandler();
      if (userResponse.data) {
        dispatch(authSlice.actions.authUserData(userResponse.data));
        dispatch(authSlice.actions.loggedIn());
      }
    };
    loadUser();
  }, []);
  return (
    <>
      <h2 className="text-red-600">{data?.name}</h2>
      {children}
    </>
  );
}
