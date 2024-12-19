import BgContactUs from "./components/BgContactUs"
import { FormContactUs } from "./components/FormContactUs";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container relative mt-[150px] flex  ipadMini:flex-row z-30 mb-[69.66px] gap-x-[100px] px-5 ipadMini:px-0 ">
        <div className="mt-[160px] hidden ipadMini:block">
          <Image
            src="/ContactAnimations.png"
            alt="contactUs"
            width={520}
            height={614}
          />
        </div>
        <div className="mx-auto flex flex-col text-center ipadMini:text-left px-5 ipadMini:px-0">
          <p className="text-[#FF64AE] leading-[20px] text-lg font-semibold mb-3 ">
            Contact Us
          </p>
          <p className="text-[#091156] text-4xl leading-[45px] max-w-[404px] font-semibold mb-5 mx-auto ipadMini:m-0">
            Send your inquiry to our expert team
          </p>
          <p className="text-[#8B8B8B] text-base leading-[24px] tracking-[1.6px] font-normal mb-10">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </p>
          <FormContactUs />
        </div>
      </div>
      <BgContactUs />
    </>
  );
};
export default ContactUs;
