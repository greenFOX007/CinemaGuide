"use client";
import Login from "@/components/Login/Login";
import ModalComponent from "@/shared/components/ModalComponent/ModalComponent";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();
  return (
    <ModalComponent
      onClose={() => {
        router.back();
      }}
    >
      <Login closeModal={() => router.back()} />
    </ModalComponent>
  );
}
