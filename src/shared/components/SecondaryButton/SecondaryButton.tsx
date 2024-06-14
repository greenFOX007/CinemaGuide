interface IButtonProps {
  children: string | React.ReactNode;
  onClick: () => void;
  customStyles?: string;
}

export default function SecondaryButton({
  children,
  onClick,
  customStyles,
}: IButtonProps) {
  const secondaryStyles =
    "text-white bg-secondary hover:bg-secondary-hover hover:text-black disabled:bg-secondary-disabled disabled:black disabled:text-opacity-5";
  return (
    <button
      onClick={onClick}
      className={`${customStyles} py-4 border-none rounded-[28px] text-lg outline-none flex justify-center items-center font-bold transition-all duration-200 ${secondaryStyles}`}
    >
      {children}
    </button>
  );
}
