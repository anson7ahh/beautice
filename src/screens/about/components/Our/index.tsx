import Image from "next/image";
import React from "react";
import { Logo } from "./constrants";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Description from "@/components/Description";
import MoreDescription from "@/components/MoreDescription";
import BubbleBGOur from "./components/BubbleBGOur";

const Our = () => {
  return (
    <div className="relative ">
      <div className="container flex flex-col gap-y-[147px] ipadMini:mt-[296px] mt-[100px] relative z-10 px-5 ipadMini:px-0 mb-[153.66px] ">
        <div className="flex flex-col gap-y-[137px]">
          <div className="flex flex-col ipadMini:flex-row gap-x-[231px]">
            <div className="ipadMini:min-w-[375.51px] min-w-full mt-[29px] ipadMini:ml-[54px] ml-0 mx-auto ipadMini:mx-0">
              <Image
                className="w-full object-fill"
                src="/Illustration-1.png"
                alt="Illustration-1"
                width={375.51}
                height={234}
              />
            </div>
            <div className="w-full flex flex-col mx-auto">
              <SubTitle className="" subTitle="Our Vision" />
              <Title
                className="ipadMini:max-w-[411px] mt-[9px] max-w-full"
                title="Be the best and go international"
              />
              <Description
                className="max-w-[475px] mt-[14px]"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
              />
              <MoreDescription
                className="mt-[25px]"
                moreDescription="Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat."
              />
            </div>
          </div>
          <div className="flex flex-col ipadMini:flex-row gap-x-[165px]">
            <div className=" flex flex-col">
              <SubTitle className="" subTitle="Our Mission" />
              <Title
                className="max-w-[525px] mt-[9px]"
                title="Special & premium service to any clients"
              />
              <Description
                className="max-w-[475px] mt-[14px]"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
              />
              <MoreDescription
                className="mt-[25px] max-w-[475px]"
                moreDescription="Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat."
              />
            </div>
            <div className="ipadMini:min-w-[432.28px] min-w-full h-[263.24px] mt-[15px] ml-[-8px] ">
              <Image
                className="w-full  h-full"
                src="/Illustration.png"
                alt="Illustration"
                width={432.28}
                height={261.24}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[102px] mx-auto w-full">
          <div className="flex flex-col ml-0 ipadMini:ml-[135px] text-center w-full  ipadMini:w-[848px]">
            <span className="text-base font-semibold leading-5 text-vividpink mb-[11px] mx-auto">
              Our Clients
            </span>
            <span className="text-4xl font-semibold  leading-[45px] text-darkblue mx-auto ipadMini:ml-[221px]  max-w-[80%]">
              Well-known agencies
            </span>
            <span className="text-darkgray text-base font-normal mx-auto  tracking-widest mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
          <div className="flex flex-wrap  ipadMini:justify-between  px-0 tablet:pl-[88px] tablet:pr-[90px] w-full justify-center  ">
            {Logo.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                height={80}
                width={147}
              />
            ))}
          </div>
        </div>
      </div>
      <BubbleBGOur />
    </div>
  );
};

export default Our;
