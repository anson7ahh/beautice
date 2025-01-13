import Image from "next/image";
import React, { FC } from "react";
interface Props {
  src: string;
  alt: string;
}
const Social: FC<Props> = ({ src, alt }) => {
  return (
    <div className="w-[27px] h-[27px] rounded-full bg-white border border-collapse mx-[14px] my-[9px]">
      <Image
        className="w-full h-full "
        src={src}
        alt={alt}
        width={25}
        height={25}
      />
    </div>
  );
};

export default Social;
