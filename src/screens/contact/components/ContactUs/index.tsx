import Description from "@/components/Description";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { FormContactUs } from "@/screens/home1/components/ContactUs/components";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="relative">
      <div className="container flex flex-col">
        <div className=" flex mt-[153px] gap-x-[100px]">
          <div className="flex flex-col">
            <SubTitle subTitle="Contact Us" />
            <Title
              className="max-w-[615px] mt-[11px]"
              title="Contact service for our customers"
            />
          </div>
          <div>
            <Description
              className="max-w-[407px] mt-[31px]"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            />
          </div>
        </div>
        <div className="flex justify-between mt-[58px]  ">
          <div className="mt-[-21px] hidden ipadMini:block ">
            <Image
              src="/ContactAnimations.png"
              alt="contactUs"
              width={543.95}
              height={421.33}
            />
          </div>
          <FormContactUs />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
