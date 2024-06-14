import {
  IGetAuthUserPayload,
  IGetAuthUserResponse,
  IGetLogoutPayload,
  IGetLogoutResponse,
  ILoginPayload,
  ILoginResponse,
  IRegistrationPayload,
  IRegistrationResponse,
} from "./auth.types";

export namespace Registration {
  export type Payload = IRegistrationPayload;
  export type Response = IRegistrationResponse;
}

export namespace Login {
  export type Payload = ILoginPayload;
  export type Response = ILoginResponse;
}

export namespace GetAuthUser {
  export type Payload = IGetAuthUserPayload;
  export type Response = IGetAuthUserResponse;
}

export namespace Logout {
  export type Response = IGetLogoutResponse;
  export type Payload = IGetLogoutPayload;
}
