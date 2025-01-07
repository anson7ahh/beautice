import { Button } from "@/components";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="container desktop:mt-[471px] relative z-0 mobile:mt-[471px] mt-[180px] px-2 tablet:px-0">
      <div className="flex tablet:gap-x-[167px] flex-col justify-center items-center ipadMini:mx-0  gap-y-[100px] tablet:flex-row  ">
        <div className="ipadMini:w-[490px] w-[90%] mt-[-54px]">
          <Image
            className="w-full"
            src="/Illustration-1.png"
            alt="Illustration"
            width={490}
            height={302.67}
          />
        </div>
        <div className="flex flex-col text-center tablet:text-left  ">
          <span className="text-base font-semibold leading-5  text-vividpink ">
            About Us
          </span>
          <span className="text-darkblue text-4xl font-semibold leading-[45px]  desktop:max-w-[460px] desktop:mt-[11px]">
            We are the best beauty clinic
          </span>
          <span className="text-base font-normal leading-6 tracking-[1.6px] text-[#8B8B8B] max-w-[483px] mt-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </span>
          <Button
            className="mt-[48px] text-white text-base font-semibold leading-6 tracking-[0.1em] bg-vividpink text-center bg-pinkish pr-10 pl-[45px] py-[17px] w-[200px]
          rounded-[50px] mx-auto ipadMini:mx-0 "
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
