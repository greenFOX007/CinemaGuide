// enum Color {
//   primery = "primery",
//   secondary = "secondary",
// }

interface IButtonProps {
  children: string | React.ReactNode;
  onClick: () => void;
  color: "primery" | "secondary";
  minWidth?: string;
  minHeight?: string;
  width?: string;
}

export default function Button({
  children,
  onClick,
  color,
  minWidth = "",
  minHeight = "",
  width = "",
}: IButtonProps) {
  const greyStyles =
    "text-white bg-secondary hover:bg-secondary-hover hover:text-black disabled:bg-secondary-disabled disabled:black disabled:text-opacity-5";
  const primeryStyles =
    "text-white bg-primery hover:bg-primery-hover hover:text-black disabled:bg-primery-disabled disabled:black disabled:text-opacity-5";
  return (
    <button
      onClick={onClick}
      className={`${width} ${minWidth} ${minHeight} py-4 border-none rounded-[28px] text-lg outline-none flex justify-center font-bold transition-all duration-200 ${
        color === "secondary" ? greyStyles : primeryStyles
      }`}
    >
      {children}
    </button>
  );
}
