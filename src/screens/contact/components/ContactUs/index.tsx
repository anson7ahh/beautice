import Description from "@/components/Description";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { FormContactUs } from "@/screens/home1/components/ContactUs/components";
import Image from "next/image";
import React from "react";
import BgBubbleContact from "./components/BgBubbleContact";

const ContactUs = () => {
  return (
    <div className="relative  px-5 ipadMini:px-0">
      <div className="container flex flex-col items-center relative z-10 ">
        <div className=" flex flex-col mt-[153px] gap-x-[100px] ipadMini:flex-row ml-[-18px] text-center ipadMini:text-start">
          <div className="flex flex-col">
            <SubTitle subTitle="Contact Us" />
            <Title
              className="max-w-[615px] mt-[11px]"
              title="Contact service for our customers"
            />
          </div>
          <div>
            <Description
              className="max-w-[407px] mt-[31px] mx-auto ipadMini:mx-0 text-center ipadMini:text-start"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            />
          </div>
        </div>
        <div className="flex flex-col ipadMini:flex-row gap-x-[75px] justify-between mt-[58px]  ">
          <div className="mt-[-21px]  ipadMini:block ipadMini:min-w-[534.95px] min-w-[80%] ">
            <Image
              className=" "
              src="/ContactAnimations.png"
              alt="contactUs"
              width={543.95}
              height={421.33}
            />
          </div>
          <FormContactUs />
        </div>
      </div>
      <div className="absolute z-0 top-[235px] right-0">
        <BgBubbleContact />
      </div>
    </div>
  );
};

export default ContactUs;
