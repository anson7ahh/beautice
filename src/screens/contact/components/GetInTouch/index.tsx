"use client";
import Description from "@/components/Description";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import React from "react";
import { Items } from "./constants";
import ContactInfo from "./components/ContactInfo";

const GetInTouch = () => {
  return (
    <div className="container mb-[155px] px-5 mobile:px-0">
      <div className="flex flex-col  text-center mt-[112px]">
        <SubTitle subTitle="Get in Touch" />
        <Title className="mt-3" title="Get direct handling by us" />
        <Description
          className="mt-[26px]"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </div>
      <div className="flex flex-col ipadMini:flex-row gap-x-[37px] mt-[93px] gap-y-10 items-center ipadMini:justify-between ipadMini:mx-[51px]">
        {Items.map((item, index) => (
          <ContactInfo key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
