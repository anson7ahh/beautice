import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface BackgroundImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  children?: ReactNode;
  className?: string;
  classNameImg?: string;
}

const BgMainService: FC<BackgroundImgProps> = ({
  src,
  alt,
  width,
  height,
  children,
  className,
  classNameImg,
}) => {
  return (
    <>
      <div className={`relative ${className}`}>
        <div className="relative z-30 inset-0 pt-[90px] tablet:pt-[0px]">
          {children}
        </div>
        <div
          className={`absolute z-0 top-0 w-full hidden tablet:block ${classNameImg}`}
        >
          <Image
            className="w-full object-fill"
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </div>
        <div className="bg-darkblue w-full absolute z-0 top-0 h-[500px] tablet:hidden"></div>
      </div>
    </>
  );
};

export default BgMainService;
