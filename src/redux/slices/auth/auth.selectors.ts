import { useAppSelector } from "@/redux/hooks";
import type { TAuthState } from "./auth.types";

export const useAuthSelector = () =>
  useAppSelector((state) => state.authReducer);
