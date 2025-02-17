/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
  name: string;
  register: any;
  type?: string;
  error?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  type = "text",
  error,
  wrapperClassName,
  labelClassName,
  ...rest
}) => {
  return (
    <div className={` w-full ${wrapperClassName}`}>
      <div className="w-full">
        <label className={`text-sm block mb-1 ${labelClassName}`}>
          {label}
        </label>
        <input
          {...rest}
          {...register(name)}
          type={type}
          className={`border border-gray-200 p-3 text-sm font-normal placeholder:text-xs placeholder:text-gray-500 rounded-lg outline-none transition-all duration-300 focus:border-blue-400 w-full mb-1`}
        />
        {error && (
          <div className=" text-red-500 left-[0px] text-xs ">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
