import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <button {...props}>{props.children}</button>;
};
