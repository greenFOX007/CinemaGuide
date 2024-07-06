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
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AuthForm({ closeModal }: { closeModal: () => void }) {
  const dispatch = useDispatch();
  const [isLogin, setIslogin] = useState<boolean>(false);

  const [
    loginHandler,
    {
      isLoading: isLoadingLogin,
      isSuccess: isSuccessLogin,
      isError: isErrorLogin,
    },
  ] = useLoginMutation();

  const [getAuthUser] = useLazyGetAuthUserQuery();
  return (
    <div className="opacity-0-0 transition-all duration-700">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (value, { setSubmitting, setStatus }) => {
          try {
            setSubmitting(true);
            const reqValues = {
              email: value.email,
              password: value.password,
            };

            let res = await loginHandler({ data: reqValues });
            if (res.data) {
              setIslogin(true);
            }
            // .unwrap()
            // .then(async () => {
            // let authUserResponse = await getAuthUser();

            // if (authUserResponse.data) {
            //   dispatch(
            //     authSlice.actions.authUserData(authUserResponse.data)
            //   );
            //   dispatch(authSlice.actions.loggedIn());
            //   closeModal();
            // }
            // });
          } catch (err) {
            setStatus(err);
            setSubmitting(false);
          }
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
            {isLogin && (
              <PrimeryButton
                onClick={async () => {
                  try {
                    let authUserResponse = await getAuthUser();

                    if (authUserResponse.data) {
                      dispatch(
                        authSlice.actions.authUserData(authUserResponse.data)
                      );
                      dispatch(authSlice.actions.loggedIn());
                      closeModal();
                    }
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                Закрыть
              </PrimeryButton>
            )}
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
