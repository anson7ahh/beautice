import Image from "next/image";
import React, { FC } from "react";
interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
  active?: boolean;
}
export const Item: FC<Props> = ({ src, alt, title, description, active }) => {
  return (
    <div className="flex gap-x-2  ">
      <div className="">
        <Image src={src} alt={alt} height={64} width={64} />
      </div>
      <div className="flex flex-col text-white  pt-[3px]">
        <span className="text-3xl mobile:text-4xl font-semibold leading-[45px] text-left">
          {title}
        </span>
        <span
          className={`text-base font-semibold leading-5 text-left ${
            active ? "text-[#FF9ACB]" : ""
          }`}
        >
          {description}
        </span>
      </div>
    </div>
  );
};
