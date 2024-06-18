"use client";
import { useLazyLogoutQuery } from "@/redux/api/auth/auth.api";
import { authSlice, useAuthSelector } from "@/redux/slices/auth";
import { EmailSVG } from "@/shared/IconsSvg";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Settings() {
  const location = useRouter();
  const [logoutHandler, { isSuccess, isLoading }] = useLazyLogoutQuery();
  const { authUser } = useAuthSelector();
  const dispatch = useDispatch();

  const logout = async () => {
    let response = await logoutHandler();

    if (response.data) {
      dispatch(authSlice.actions.loggedOut());
      location.push("/");
    }
  };
  return (
    <div className="mt-16">
      <div className="mb-16">
        <div className="flex items-center mb-10">
          <div className="rounded-full size-[60px] max-md:size-12 bg-white-opacity flex items-center justify-center mr-4 font-bold text-[24px]">{`${authUser?.name[0].toUpperCase()}${authUser?.surname[0].toUpperCase()}`}</div>
          <div className="flex flex-col justify-between">
            <div className="text-[18px] max-md:text-sm">Имя Фамилия</div>
            <div className="text-[24px] font-bold max-md:text-lg">{`${authUser?.name} ${authUser?.surname}`}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full size-[60px] max-md:size-12 bg-white-opacity flex items-center justify-center mr-4 font-bold text-[24px]">
            <EmailSVG opacity="none" color="#FFFFFF" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-[18px] max-md:text-sm">Электронная почта</div>
            <div className="text-[24px] font-bold max-md:text-lg">
              {authUser?.email}
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <PrimeryButton type="button" customStyles="w-[262px]" onClick={logout}>
        Выйти из аккаунта
      </PrimeryButton>
    </div>
  );
}
