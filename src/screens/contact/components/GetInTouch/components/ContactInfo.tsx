"use client";
import SubTitle from "@/components/SubTitle";
import Image from "next/image";

import React, { FC } from "react";
interface Props {
  src: string;
  alt: string;
  subtitle: string;
  title: string;
  active: boolean;
}
const ContactInfo: FC<Props> = ({
  src,
  alt,
  subtitle,
  title,

  active,
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center  ${
        active
          ? "border border-inherit rounded-[25px]  shadow-2xl pt-[79px]  pb-[71px] w-full tablet:w-[80%] ipadMini:w-full"
          : "ipadMini:min-w-[270px] min-w-[40%] mt-[10px]"
      }`}
    >
      <div>
        <Image src={src} alt={alt} width={65} height={65} />
      </div>
      <div className="flex flex-col mt-[46px]">
        <SubTitle subTitle={subtitle} />
        <p className="mt-[13px] text-2xl font-semibold leading-[30px] text-darkblue">
          {title}
        </p>
        <p className="max-w-[270px] mt-[12px] text-sm font-normal leading-[21px] tracking-[0.1em] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
