"use client";
import React, { FC } from "react";
interface Props {
  title: string;
}
const Category: FC<Props> = ({ title }) => {
  return (
    <p className="text-sm font-normal leading-[21px] tracking-[0.1em] text-darkgray">
      {title}
    </p>
  );
};

export default Category;
