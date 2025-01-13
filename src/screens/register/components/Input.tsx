/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface InputProps {
  label: string;
  name: string;
  register: any;
  type?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  type = "text",
  error,
}) => {
  return (
    <div className="relative">
      <label className="inline-flex min-w-[150px]">{label}</label>
      <input {...register(name)} type={type} className="border w-[300px]" />
      {error && (
        <div className="absolute text-red-500 left-[150px] text-xs">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
