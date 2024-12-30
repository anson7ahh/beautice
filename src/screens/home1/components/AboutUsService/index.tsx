import { Button } from "@/components";
import { BgAboutUs } from "./components/BgAboutUs";

import Image from "next/image";
import React from "react";

const AboutUsService = () => {
  return (
    <div>
      <div className="container relative z-10">
        <div className="relative flex ipadMini:flex-row justify-start flex-col w-full  ipadMini:ml-0 items-center ipadMini:text-left  gap-y-10 px-5 ipadMini:px-0 ">
          <div className=" ipadMini:ml-0 ipadMini:text-left text-center desktop:w-[664px] w-full ">
            <p className="text-vividpink text-base leading-5 font-semibold mb-3  ipadMini:text-left">
              About Us
            </p>
            <p className="text-darkblue text-4xl font-semibold leading-[45px] mb-5  ">
              We are the best beauty clinic
            </p>
            <p className="max-w-[483px] leading-6 tracking-[1.6px] text-base text-darkgray mb-[24px] tablet:mx-auto ipadMini:mx-0  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
              tellus in suspendisse placerat.
            </p>
            <p className="max-w-[483px] leading-6 tracking-[1.6px] text-base text-darkgray tablet:mx-auto ipadMini:mx-0  ">
              Id dui erat sed quam tellus in purus. Pellentesque congue
              fringilla cras tellus enim.
            </p>
            <div className="flex mt-[52px] justify-center ipadMini:justify-start">
              <Button
                type="button"
                className="bg-vividpink text-white w-[150px] ipadMini:w-[200px] rounded-[50px] text-center tracking-[1.6px] 
                            text-base ipadMini:leading-[59px] leading-[38.36px] font-semibold"
              >
                Learn More
              </Button>
              <div className="mt-[2px] flex items-center leading-6 tracking-[1.6px] text-base font-semibold text-darkgray ml-[44px]">
                <Image
                  className=" mobile:mr-[14px]"
                  src="/Play_button.svg"
                  alt="IconWathVideo"
                  width={49}
                  height={49}
                />
                <p className="mt-[-2px]">Watch Video</p>
              </div>
            </div>
          </div>
          <div className="z-20 rounded-[50px] w-[80%]  ipadMini:w-[476px]    ipadMini:mt-[46px]  ">
            <Image
              className="w-full h-full object-contain"
              src="/AboutUsImg.png"
              alt="aboutUs"
              width={476}
              height={350}
            />
          </div>
        </div>
      </div>
      <BgAboutUs />
    </div>
  );
};

export default AboutUsService;
