"use client";
import React, { FC } from "react";
interface Props {
  title: string;
  children: React.ReactNode;
  titleClassName: string;
}
const Card: FC<Props> = ({ title, children, titleClassName }) => {
  return (
    <div className="flex flex-col border rounded-[25px] border-transparent shadow-2xl w-auto ">
      <p className={`text-base font-semibold leading-5 ${titleClassName}`}>
        {title}
      </p>
      {children}
    </div>
  );
};

export default Card;
