import Background from "@/components/Background";
import Image from "next/image";
import React from "react";

const BusinessSlogan = () => {
  return (
    <div className=" mt-[-5px]">
      <Background
        classNameImg="-z-20 w-full max-h-[529px]"
        className="z-40 top-0"
        src="/SecsionSlogan.png"
        alt="SectionSlogan"
        height={529}
        width={1440}
        overlay={
          <Image
            className="w-full max-h-[529px] "
            src="/BackgroundMask.png"
            alt="BackgroundMask"
            width={1440}
            height={529}
          />
        }
      >
        <div className="flex flex-col text-center mx-auto ipadMini:pt-[168.5px] pt-[100px] pb-[100px] ipadMini:pb-0">
          <span className="text-base font-semibold leading-4 text-[#ABB4FF]">
            Business Slogan
          </span>
          <span className="text-4xl font-semibold leading-[45px] text-white max-w-[601px] mx-auto mt-3">
            Best responsibility and service for our customers
          </span>
          <span className="text-base font-normal  tracking-[0.1em] text-[#CACACA] max-w-[680px] mx-auto mt-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </span>
        </div>
      </Background>
    </div>
  );
};

export default BusinessSlogan;
