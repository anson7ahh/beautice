import { Button } from "@/components";
import Image from "next/image";
import React, { FC } from "react";
interface Prop {
  src: string;
  title: string;
  alt: string;
  description: string;
}
const MainServiceItem: FC<Prop> = ({ src, alt, description, title }) => {
  return (
    <div className="flex flex-col border rounded-[25px] px-[36px] pt-[31px] bg-white tablet:text-left text-center mx-auto tablet:mx-0">
      <Image
        className="mb-[25px] mx-auto tablet:mx-0"
        src={src}
        alt={alt}
        width={64}
        height={64}
      />
      <span className="text-lg font-semibold leading-[22.5px]  text-darkblue mb-[14px] ">
        {title}
      </span>
      <span className="text-sm font-normal leading-[21px] tracking-[0.1em]   text-darkgray max-w-[189px] mb-[17px]">
        {description}
      </span>
      <Button className="flex mb-[47px] text-vividpink items-center gap-x-2 text-sm font-semibold leading-[17.5px] mx-auto tablet:mx-0">
        Learn more
        <Image
          src="/angle-double-right.svg"
          alt="angle-double-right"
          height={17}
          width={16}
        />
      </Button>
    </div>
  );
};

export default MainServiceItem;
