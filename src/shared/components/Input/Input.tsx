import { Field } from "formik";
import { InputHTMLAttributes } from "react";
import "./Input.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isTouched?: { [key: string]: string | any };
  error?: { [key: string]: string };
  children?: React.ReactNode;
  styles?: string;
  name: string;
}

export default function Input({
  name,
  placeholder,
  type,
  required,
  value,
  children,
  isTouched,
  error,
  styles,
}: IInputProps) {
  const isError = isTouched?.[name] && error?.[name];

  const errStyles = `border-rose-600 text-rose-600`;
  const normalStyles = `border-black-40 placeholder:text-black-40 text-black`;

  return (
    <div className={`${styles} group relative`}>
      <div className="relative">
        <Field
          className={`input border rounded-lg ${
            isError ? errStyles : normalStyles
          } pl-14 pr-4 pb-4 pt-4 w-full  text-base focus:outline-none `}
          value={value}
          name={name}
          placeholder={placeholder}
          type={type}
          required={required}
        />
        {children && (
          <div className="svg-container absolute left-4 top-1/2 -translate-y-1/2">
            {children}
          </div>
        )}
      </div>
      {isError && (
        <p className="text-rose-600 m-0 p-0 absolute -bottom-5">
          {error?.[name]}
        </p>
      )}
    </div>
  );
}
