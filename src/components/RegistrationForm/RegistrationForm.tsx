import { useRegistrationMutation } from "@/redux/api/auth/auth.api";
import { EmailSVG, LoginSVG, PasswordSVG } from "@/shared/IconsSvg";
import Input from "@/shared/components/Input/Input";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import { Form, Formik } from "formik";
import { object, ref, string } from "yup";

export default function RegistrationForm({
  changeAuth,
}: {
  changeAuth: () => void;
}) {
  const [registrationHandler, { isLoading, isSuccess, isError, error }] =
    useRegistrationMutation();

  const initialValues = {
    email: "",
    name: "",
    surname: "",
    password: "",
    password_repeat: "",
  };
  const validationSchema = object().shape({
    email: string()
      .required("Обязательно для заполнения")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(((?!-)[a-zA-Z\-0-9]+(?<!-)\.)+[a-zA-Z]{2,}))$/,
        "Неверный формат"
      )
      .max(51, "Не больше 50 символов"),
    name: string()
      .required("Обязательно для заполнения")
      .max(100, "Не больше 100 символов"),
    surname: string()
      .required("Обязательно для заполнения")
      .max(100, "Не больше 100 символов"),
    password: string()
      .required("Обязательно для заполнения")
      .min(10, "Слишком короткий пароль"),
    password_repeat: string()
      .oneOf([ref("password"), undefined], "Пароли не совпадают")
      .required("Обязательно для заполнения"),
  });

  return (
    <div className="">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={async (value, { setStatus, setSubmitting }) => {
          try {
            setSubmitting(true);
            const reqValues = {
              email: value.email,
              password: value.password,
              name: value.name,
              surname: value.surname,
            };

            let req = await registrationHandler({ data: reqValues });

            if (req.error) {
              setStatus(req.error);
            }

            if (isSuccess) {
              setSubmitting(false);
            }
          } catch (err) {
            console.log(err);
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched, isSubmitting, status }) => {
          return (
            <>
              {isSuccess && (
                <div className="">
                  <h3 className="text-black font-bold text-xl mb-6 text-center">
                    Регистрация завершена
                  </h3>
                  <p className="text-black text-lg mb-6 text-center">
                    Используйте вашу электронную почту для входа
                  </p>
                  <PrimeryButton
                    customStyles="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      changeAuth();
                    }}
                  >
                    Войти
                  </PrimeryButton>
                </div>
              )}

              {!isSuccess && (
                <Form>
                  <div className="flex justify-center mb-6">
                    <p className="text-black text-lg font-bold">Регистрация</p>
                  </div>
                  <Input
                    styles="mb-4"
                    placeholder="Электронная почта"
                    type="text"
                    name="email"
                    error={errors}
                    isTouched={touched}
                  >
                    <EmailSVG styles="group-hover:fill-activeBtn transition-colors duration-100" />
                  </Input>
                  <Input
                    styles="mb-4"
                    placeholder="Имя"
                    type="text"
                    name="name"
                    error={errors}
                    isTouched={touched}
                  >
                    <LoginSVG
                      opacity="0.4"
                      color="black"
                      styles="group-hover:fill-activeBtn transition-colors duration-100"
                    />
                  </Input>
                  <Input
                    styles="mb-4"
                    placeholder="Фамилия"
                    type="text"
                    name="surname"
                    error={errors}
                    isTouched={touched}
                  >
                    <LoginSVG
                      opacity="0.4"
                      color="black"
                      styles="group-hover:fill-activeBtn transition-colors duration-100"
                    />
                  </Input>
                  <Input
                    styles="mb-6"
                    placeholder="Пароль"
                    type="password"
                    name="password"
                    error={errors}
                    isTouched={touched}
                  >
                    <PasswordSVG styles="group-hover:fill-activeBtn transition-colors duration-100" />
                  </Input>
                  <Input
                    styles="mb-6"
                    placeholder="Подтвердите пароль"
                    type="password"
                    name="password_repeat"
                    error={errors}
                    isTouched={touched}
                  >
                    <PasswordSVG styles="group-hover:fill-activeBtn transition-colors duration-100" />
                  </Input>
                  <PrimeryButton customStyles="w-full" type={"submit"}>
                    {isSubmitting ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </div>
                    ) : (
                      "Создать аккаунт"
                    )}
                  </PrimeryButton>

                  <div className="flex justify-center mt-6">
                    <button
                      className="text-black text-lg font-bold bg-transparent border-none outline-none "
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        changeAuth();
                      }}
                    >
                      У меня есть пароль
                    </button>
                  </div>
                </Form>
              )}
              {isError && status.status === 400 && (
                <p className="text-rose-600 text-sm font-bold text-center">
                  Ошибка, такой пользователь существует.
                </p>
              )}
            </>
          );
        }}
      </Formik>
    </div>
  );
}
