import React, { FC } from "react";

import Image from "next/image";

interface Props {
  className: string;
  imgSrc: string;
  title: string;
  description: string;
}

export const MainServiceItem: FC<Props> = ({
  className,
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className={className}>
      <div className="bg-white flex flex-col rounded-[42px] text-center shadow-[0px_25px_50px_25px_rgba(246,247,255,1)] desktop:min-w-[343px] max-w-full">
        <Image
          className="mt-[59px] mx-auto mb-[51px] "
          src={imgSrc}
          alt="feature1"
          width={166}
          height={166}
        />
        <p className="px-10 pb-[13px]  mx-auto leading-[22.5px] text-lg font-semibold text-darkblue mb-[6px]">
          {title}
        </p>
        <p className="mx-auto text-center desktop:max-w-[274px] tablet:max-w-[80%] tracking-[1.4px] leading-[21px] text-sm font-normal text-[#8B8B8B] mb-[70px]">
          {description}
        </p>
      </div>
    </div>
  );
};
