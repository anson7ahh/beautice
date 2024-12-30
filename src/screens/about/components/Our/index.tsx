import Image from "next/image";
import React from "react";
import { ContentWithIllustrations, Logo } from "./constrants";
import ContentWithIllustration from "@/components/ContentWithIllustration";

const Our = () => {
  return (
    <div className="container flex flex-col gap-y-[117px] justify-center items-center px-3">
      {ContentWithIllustrations.map((item, index) => (
        <ContentWithIllustration key={index} {...item} />
      ))}
      <div className="flex flex-col gap-y-[100px] w-full">
        <div className="flex flex-col mx-auto text-center">
          <span className="text-base font-semibold leading-5 text-vividpink mb-[11px]">
            Our Clients
          </span>
          <span className="text-3xl font-semibold leading-[45px] text-darkblue tracking-[3.5px] mb-[20px] max-w-[80%]">
            Well-known agencies
          </span>
          <span className="text-darkgray text-base font-normal  tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
        </div>
        <div className="flex flex-wrap  ipadMini:justify-between  px-0 tablet:px-[133px] w-full justify-center">
          {Logo.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              height={80}
              width={147}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our;
