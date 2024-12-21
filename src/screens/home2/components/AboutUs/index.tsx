import { Button } from "@/components";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" container mt-[501px] relative z-0">
      <div className="flex gap-x-[167px] ">
        <div>
          <Image
            src="/Illustration-1.png"
            alt="Illustration"
            width={490}
            height={302.67}
          />
        </div>
        <div className="flex flex-col  ">
          <span className="text-base font-semibold leading-5 text-left text-vividpink">
            About Us
          </span>
          <span className="text-darkblue text-4xl font-semibold leading-[45px] text-left max-w-[460px] mt-[11px]">
            We are the best beauty clinic
          </span>
          <span className="text-base font-normal leading-6 tracking-[1.6px] text-[#8B8B8B] max-w-[483px] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </span>
          <Button
            className="mt-[48px] text-white text-base font-semibold leading-6 tracking-[0.1em] text-center bg-pinkish px-[40px] py-[16px] w-[200px]
          rounded-[50px]"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
