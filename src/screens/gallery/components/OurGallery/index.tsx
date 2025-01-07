import Description from "@/components/Description";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import React from "react";
import { Images } from "./constant";
import Image from "next/image";

const OurGallery = () => {
  return (
    <div className="container mt-[152px] px-5 ipadMini:px-0">
      <div className="flex flex-col ">
        <div className="flex gap-x-[98px] flex-col ipadMini:flex-row">
          <div className="flex flex-col">
            <SubTitle subTitle="Our Gallery" />
            <Title
              title="Check out the collection pictures from our clinic"
              className="ipadMini:min-w-[615px] mt-[11px] min-w-full"
            />
          </div>
          <div className="mt-[31px]">
            <Description
              className="max-w-[407px] "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-9 gap-y-[38px] mt-[89px]">
          {Images.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={img.alt}
              width={356}
              height={210}
            />
          ))}
        </div>
        <div className="mt-[67px]">
          <p className="max-w-[660px] text-base font-normal  tracking-widest text-darkgray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim,{" "}
            <span className="text-darkblue font-semibold">our teams.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
