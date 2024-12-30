import React from "react";
import { Imgs } from "./contrant";
import Image from "next/image";
import BubbleBGOurService from "./components/BubbleBGOurService";
import PageTitle from "@/components/PageTitle";

const OurService = () => {
  return (
    <div className="relative">
      <div className="container mt-[150px]">
        <PageTitle
          title="We focus on your beauty"
          subtitle="Our Services"
          description="Lorem ipsum dolor sit amet"
        />
        <div className="flex flex-wrap gap-x-[84px] gap-y-[68px] ml-[50px] mt-[73px] w-full">
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
