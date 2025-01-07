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
  overlay?: ReactNode;
}

const Background: FC<BackgroundImgProps> = ({
  src,
  alt,
  width,
  height,
  children,
  className,
  classNameImg,
  overlay,
}) => {
  return (
    <>
      <div className="relative w-full bg-darkblue ipadMini:bg-inherit">
        <div className={`relative ${className} w-full `}>{children}</div>
        <div className={`absolute  top-0 w-full ${classNameImg}`}>
          <div className="relative">
            <div className="absolute -z-10 w-full hidden ipadMini:block ">
              <Image
                className="w-full"
                src={src}
                alt={alt}
                width={width}
                height={height}
              />
            </div>
            <div className="absolute -z-10 top-0 w-full hidden ipadMini:block">
              {overlay}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
