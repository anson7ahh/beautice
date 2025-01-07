import Image from "next/image";
import React, { FC } from "react";
interface Props {
  src: string;
  alt: string;
}
const RecentPosts: FC<Props> = ({ src, alt }) => {
  return (
    <div className="flex flex-row gap-x-[27px]  ">
      <div className="w-[82px] h-[82px]">
        <Image
          className="w-full h-full"
          src={src}
          alt={alt}
          width={82}
          height={82}
        />
      </div>
      <div className="mt-[-3px]">
        <p className="text-sm font-semibold leading-[21px] tracking-[0.1em] text-vividpink">
          01 jan 2021
        </p>
        <p className="max-w-[195px] text-xs font-normal leading-[18px] tracking-[0.1em] text-darkgray mt-[9px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>
    </div>
  );
};

export default RecentPosts;
