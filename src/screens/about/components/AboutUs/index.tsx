import Description from "@/components/Description";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="container px-5 desktop:px-0 mobile:mt-[150px] mt-[70px]">
        <div className="flex flex-col text-left  ">
          <SubTitle subTitle="About" />
          <Title
            title="We are a leading beauty clinic that has been around since 2002 "
            className="max-w-[732px] mt-[10px]"
          />
          <span className="text-4xl font-semibold leading-[45px]  text-darkblue  "></span>
          <Description
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis"
            className="max-w-[680px]   mt-[20px]"
          ></Description>
        </div>
        <div className="relative z-10 w-full ml-[-2px]">
          <div className="mobile:mt-[66px] relative z-0 mt-10">
            <Image
              className="desktop:w-full  max-h-[540px] object-contain "
              src="/aboutBanner.png"
              alt="aboutBanner"
              width={1140}
              height={540}
            />
          </div>
          <div className="absolute z-20 top-[42px] left-[130px] mobile:top-[61px] mobile:left-[203px] tablet:top-[169px] tablet:left-[462px] ipadMini:top-[185px] ipadMini:left-[484px]">
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

export default AboutUs;
