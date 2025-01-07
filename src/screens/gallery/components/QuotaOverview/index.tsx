import { Button } from "@/components";
import Description from "@/components/Description";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import React from "react";
import BackgroundBubbleGallery from "./components/BackgroundBubbleGallery";

const QuotaOverview = () => {
  return (
    <div className=" relative z-0   ">
      <div className=" container relative  pt-[117px] mb-[232.66px] px-5 ipadMini:px-0 flex flex-col  ipadMini:flex-row mx-auto items-center text-center ipadMini:items-start ipadMini:text-left gap-x-[126px] ">
        <div className="flex flex-col ">
          <SubTitle subTitle="Get The Quota" />
          <Title
            className="max-w-[642px] mt-3"
            title="Want to be handled by our professional team immediately?"
          />
          <Description
            className="max-w-[561px] mt-[22px]"
            description="Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim."
          />
        </div>
        <div>
          <Button className="bg-vividpink w-[316px] h-[58px] rounded-[50px] text-white mt-[67px]">
            <span className="text-base font-semibold leading-6 tracking-[0.1em]">
              Make an Appointment
            </span>
          </Button>
        </div>
      </div>
      <div className="absolute right-0 top-0 -z-50 hidden desktop:block">
        <BackgroundBubbleGallery />
      </div>
    </div>
  );
};

export default QuotaOverview;
