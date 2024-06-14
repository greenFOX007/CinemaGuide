export type authUserdata = {
  favorites: Array<string>;
  surname: string;
  name: string;
  email: string;
};

export type TAuthState = {
  isAuthenticated: boolean;
  authUser: authUserdata | null;
};
