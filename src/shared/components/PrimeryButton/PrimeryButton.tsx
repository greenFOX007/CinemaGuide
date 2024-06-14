import { SyntheticEvent } from "react";

interface IButtonProps {
  children: string | React.ReactNode;
  onClick?: (e: SyntheticEvent) => void;
  customStyles?: string;
  type?: "button" | "submit" | "reset";
}

export default function PrimeryButton({
  children,
  onClick,
  customStyles,
  type,
}: IButtonProps) {
  const primeryStyles =
    "text-white bg-primery hover:bg-primery-hover hover:text-black disabled:bg-primery-disabled disabled:black disabled:text-opacity-5";
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className={`${customStyles} py-4 border-none rounded-[28px] text-lg outline-none flex justify-center font-bold transition-all duration-200 ${primeryStyles}`}
    >
      {children}
    </button>
  );
}
