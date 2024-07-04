import {
  useLoginMutation,
  useLazyGetAuthUserQuery,
} from "@/redux/api/auth/auth.api";
import { authSlice, useAuthSelector } from "@/redux/slices/auth";
import { EmailSVG, PasswordSVG } from "@/shared/IconsSvg";
import Input from "@/shared/components/Input/Input";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import Spiner from "@/shared/components/Spiner/Spiner";
import httpClient from "@/utils/axios";
import { Formik, Form } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { date } from "yup";

export default function AuthForm({ closeModal }: { closeModal: () => void }) {
  const dispatch = useDispatch();
  const { authUser } = useAuthSelector();
  const [dataLol, setDataLol] = useState<any>();

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

            let req = await httpClient.post("/auth/login", reqValues);
            // console.log(req);
            if (req.data) {
              let authUserResponse = await httpClient.get("/profile");
              if (authUserResponse.data) {
                dispatch(authSlice.actions.authUserData(authUserResponse.data));
                dispatch(authSlice.actions.loggedIn());
                setSubmitting(false);
                closeModal();
              }
            }

            // let req = await loginHandler({ data: reqValues })
            //   .unwrap()
            //   .then(async () => {
            //     let authUserResponse = await getAuthUser();
            //     setDataLol(authUserResponse.data);

            //     if (authUserResponse.data) {
            //       dispatch(
            //         authSlice.actions.authUserData(authUserResponse.data)
            //       );
            //       dispatch(authSlice.actions.loggedIn());

            //       // closeModal();
            //       setStatus("ok");
            //     }
            //   });
            // setSubmitting(false);
            // let req = await loginHandler({ data: reqValues });
            // if (req.error) {
            //   setStatus(req.error);
            // }
            // if (isSuccessLogin) {
            //   // let authUserResponse = await getAuthUser();
            //   // if (authUserResponse.data) {
            //   //   dispatch(authSlice.actions.authUserData(authUserResponse.data));
            //   //   dispatch(authSlice.actions.loggedIn());
            //   setSubmitting(false);
            //   closeModal();
            //   // }
            // }
          } catch (err) {
            setStatus(err);
            setSubmitting(false);
          }
        }}
      >
        {({ status, values }) => (
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
            <div className="text-black">
              {/* {authUser ? authUser?.name : "lol"} */}
              {dataLol?.email}
            </div>
            <PrimeryButton type={"submit"} customStyles="w-full">
              {isLoadingLogin ? <Spiner /> : "Войти"}
            </PrimeryButton>
            <div className="flex justify-center mt-6 relative">
              {status?.status === 400 && (
                <p className="text-rose-600 text-sm text-center absolute -top-5 ">
                  Неверный Email или пароль.
                </p>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
