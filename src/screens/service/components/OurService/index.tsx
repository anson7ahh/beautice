import React from "react";
import { Imgs } from "./contrant";
import Image from "next/image";
import BubbleBGOurService from "./components/BubbleBGOurService";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import Description from "@/components/Description";

const OurService = () => {
  return (
    <div className="relative">
      <div className="container ipadMini:mt-[148px] mt-[80px]">
        <div className="flex flex-col justify-center  items-center text-center ">
          <SubTitle subTitle="Our Services" />
          <Title className="mt-[9px]" title="We focus on your beauty" />
          <Description
            className="mt-6"
            description="Lorem ipsum dolor sit amet"
          />
        </div>
        <div className="flex px-5  justify-center ipadMini:justify-start ipadMini:px-0 flex-wrap gap-x-[84px] gap-y-[68px]  ipadMini:mx-0 ipadMini:ml-[21px] mt-[73px] w-full">
          {Imgs.map((img, index) => (
            <Image
              className={img.imgClassName}
              key={index}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          ))}
        </div>
      </div>
      <BubbleBGOurService />
    </div>
  );
};

export default OurService;
