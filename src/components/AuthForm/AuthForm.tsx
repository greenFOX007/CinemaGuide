import {
  useLoginMutation,
  useLazyGetAuthUserQuery,
} from "@/redux/api/auth/auth.api";
import { authSlice, useAuthSelector } from "@/redux/slices/auth";
import { EmailSVG, PasswordSVG } from "@/shared/IconsSvg";
import Input from "@/shared/components/Input/Input";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import Spiner from "@/shared/components/Spiner/Spiner";
import { Formik, Form } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AuthForm({ closeModal }: { closeModal: () => void }) {
  const dispatch = useDispatch();

  const [
    loginHandler,
    {
      isLoading: isLoadingLogin,
      isSuccess: isSuccessLogin,
      isError: isErrorLogin,
    },
  ] = useLoginMutation();

  // useEffect(() => {
  //   if (isSuccessLogin) {
  //     getAuthUser().then((data) => {
  //       if (data.data) {
  //         dispatch(authSlice.actions.authUserData(data?.data));
  //         dispatch(authSlice.actions.loggedIn());
  //         closeModal();
  //       }
  //     });
  //   }
  // }, [isSuccessLogin]);

  const [getAuthUser] = useLazyGetAuthUserQuery();
  return (
    <div className="opacity-0-0 transition-all duration-700">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (value, { setSubmitting, setStatus }) => {
          const reqValues = {
            email: value.email,
            password: value.password,
          };
          try {
            //   setSubmitting(true);
            // const reqValues = {
            //   email: value.email,
            //   password: value.password,
            // };

            //   let req = await loginHandler({ data: reqValues });
            //   // console.log(isLoadingLogin);
            //   // if (isSuccessLogin) {
            //   //   let authUserResponse = await getAuthUser();

            //   //   if (authUserResponse.data) {
            //   //     dispatch(authSlice.actions.authUserData(authUserResponse.data));
            //   //     dispatch(authSlice.actions.loggedIn());
            //   //     closeModal();
            //   //   }
            //   // }
            const res = await fetch(
              "https://cinemaguide.skillbox.cc/auth/login",
              {
                method: "POST",
                body: JSON.stringify(reqValues),
                headers: { "Content-Type": "application/json" },
                cache: "no-store",
                credentials: "include",
              }
            );
            let a: any = await res.json();
            if (a.result == true) {
              const res2 = await fetch(
                "https://cinemaguide.skillbox.cc/profile",
                {
                  method: "GET",
                  credentials: "include",
                  headers: { "Content-Type": "application/json" },
                  cache: "no-store",
                }
              );
              if (res2.ok) {
                let lol = await res2.json();
                console.log(lol);
                dispatch(authSlice.actions.authUserData(lol));
                dispatch(authSlice.actions.loggedIn());
                closeModal();
              }
            }
          } catch (err) {
            setStatus(err);
            setSubmitting(false);
          }
          // fetch("https://cinemaguide.skillbox.cc/auth/login", {
          //   method: "POST",
          //   body: JSON.stringify(reqValues),
          //   headers: { "Content-Type": "application/json" },
          //   cache: "no-store",
          //   credentials: "include",
          // })
          //   .then(() => {
          //     return fetch("https://cinemaguide.skillbox.cc/profile", {
          //       method: "GET",
          //     });
          //   })
          //   .then((data) => console.log(data));
        }}
      >
        {({ status }) => (
          <Form className="overflow-y-hidden relative">
            <Input
              styles="mb-3"
              placeholder="Электронная почта"
              type="text"
              name="email"
            >
              <EmailSVG styles="group-hover:fill-activeBtn transition-colors duration-100" />
            </Input>
            <Input
              styles="mb-6"
              placeholder="Пароль"
              type="password"
              name="password"
            >
              <PasswordSVG styles="group-hover:fill-activeBtn transition-colors duration-100" />
            </Input>
            <PrimeryButton type="submit" customStyles="w-full">
              {isLoadingLogin ? <Spiner /> : "Войти"}
            </PrimeryButton>
            <div className="flex justify-center mt-6 relative">
              {status?.status === 400 && (
                <p className="text-rose-600 text-sm text-center absolute -top-5 ">
                  Неверный Email или пароль!
                </p>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
