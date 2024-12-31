import { Button } from "@/components";
import Image from "next/image";
import React, { FC } from "react";
interface Prop {
  src: string;
  title: string;
  alt: string;
  description: string;
}
const BlogItems: FC<Prop> = ({ src, alt, description, title }) => {
  return (
    <div className="flex flex-col border rounded-[25px] w-[348px] bg-white mx-auto ">
      <Image
        className=" w-full mb-[58px]"
        src={src}
        alt={alt}
        width={347}
        height={249}
      />
      <div className="ml-[38px] flex flex-col mx-auto ">
        <span className="text-lg font-semibold leading-[22.5px] text-left text-darkblue mb-[14px] max-w-[288px]">
          {title}
        </span>
        <span className="text-sm font-normal leading-[21px] tracking-[0.1em] text-left  text-darkgray max-w-[271px] mb-[25px]">
          {description}
        </span>
        <Button className="flex mb-[72px] text-vividpink items-center gap-x-2 text-sm font-semibold leading-[17.5px]">
          Learn more
          <Image
            src="/angle-double-right.svg"
            alt="angle-double-right"
            height={17}
            width={16}
          />
        </Button>
      </div>
    </div>
  );
};

export default BlogItems;
