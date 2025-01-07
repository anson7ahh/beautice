import React, { FC } from "react";

import Image from "next/image";

interface Props {
  id: number;
  name: string;
  imgSrc: string;
  title: string;
  description: string;
}

export const ProfessionalItems: FC<Props> = ({
  id,
  name,
  imgSrc,
  title,
  description,
}) => {
  return (
    <div
      className={`mx-auto flex flex-col min-w-[270px] text-center py-[86px] pb-[96px]  ${
        id === 2
          ? " ipadMini:w-full w-[40%] rounded-[42px] bg-white shadow-[0px_25px_50px_25px_rgba(246,247,255,1)]"
          : ""
      } `}
    >
      <Image
        className="mx-auto  mb-[53px]"
        src={imgSrc}
        alt="feature1"
        width={146}
        height={146}
      />
      <p className="text-[#FF64AE] leading-5 text-base font-semibold ">
        {name}
      </p>
      <p className="text-[#091156] font-semibold text-lg leading-[22.5px] mt-[15px]">
        {title}
      </p>
      <p className="text-[#8B8B8B] font-normal text-sm leading-5 tracking-[1.4px] max-w-[270px] mx-auto text-center  mt-[22px]">
        {description}
      </p>
      <div className="flex flex-row justify-center gap-x-[3px]  mt-[42px]">
        <Image
          src="/TwitterProfessional.svg"
          alt="Twitter"
          width={80}
          height={80}
        />
        <Image
          src="/FacebookProfessional.svg"
          alt="Facebook"
          width={80}
          height={80}
        />
        <Image
          src="/InstagramProfessional.svg"
          alt="Instagram"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};
