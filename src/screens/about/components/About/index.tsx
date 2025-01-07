import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="container px-2 desktop:px-0 mt-[153px]">
        <div className="flex flex-col text-left ">
          <span className="text-base font-semibold leading-5 text-vividpink  ">
            About
          </span>
          <span className="text-4xl font-semibold leading-[45px] max-w-[732px] text-darkblue mt-[10px] ">
            We are a leading beauty clinic that has been around since 2002
          </span>
          <span className="max-w-[680px] text-base font-normal leading-6 tracking-widest  text-darkgray  mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </span>
        </div>
        <div className="relative z-10 w-full">
          <div className="mobile:mt-[68px] relative z-0">
            <Image
              className="desktop:w-full h-[540px] object-contain "
              src="/aboutBanner.png"
              alt="aboutBanner"
              width={1140}
              height={540}
            />
          </div>
          <div className="absolute z-20 top-[230px] ipadMini:top-[184px] left-1/2 transform -translate-x-1/2">
            <Image
              className="object-contain w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[176px] lg:h-[176px]"
              src="/PlayButtonAbout.svg"
              alt="PlayHeader"
              width={176}
              height={176}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
