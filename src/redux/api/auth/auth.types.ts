export type IRegistrationPayload = {
  data: {
    email: string;
    name: string;
    surname: string;
    password: string;
  };
};

export type IRegistrationResponse = void;

export type ILoginPayload = {
  data: {
    email: string;
    password: string;
  };
};

export type ILoginResponse = void;

export type IGetAuthUserPayload = void;

export type IGetAuthUserResponse = {
  favorites: Array<string>;
  surname: string;
  name: string;
  email: string;
};

export type IGetLogoutPayload = void;
export type IGetLogoutResponse = void;
