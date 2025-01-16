import Description from "@/components/Description";
import Image from "next/image";
import React, { FC } from "react";
interface Props {
  src: string;
  alt: string;
  name: string;
  career: string;
}
const AssistanceItems: FC<Props> = ({ src, alt, name, career }) => {
  return (
    <div className="flex gap-x-[172px] flex-col ipadMini:flex-row ">
      <div className=" mobile:min-w-[398px] h-[253px]  ">
        <Image
          className="w-full h-[253px] object-contain"
          src={src}
          alt={alt}
          width={398}
          height={253}
        />
      </div>
      <div className="flex flex-col mx-auto ipadMini:mx-0">
        <p className="text-lg font-semibold leading-[22.5px] mt-[65px]">
          {name}
          <span className="text-sm italic font-normal leading-[17.5px] ">
            {career}
          </span>
        </p>
        <Description
          className="max-w-[434px] mt-[21px]"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque."
        />
      </div>
    </div>
  );
};

export default AssistanceItems;
