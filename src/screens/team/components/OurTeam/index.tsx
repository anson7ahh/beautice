import Description from "@/components/Description";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { ProfessionalItems } from "@/screens/home1/components/Professional/components";
import { items } from "@/screens/home1/components/Professional/constants";
import React from "react";
import BubbleBgTeam from "./components/BubbleBgTeam";

const OurTeam = () => {
  return (
    <div className="relative">
      <div className="container flex flex-col mt-[154px]">
        <div className="flex flex-col text-center ipadMini:ml-[-79px]  px-5 ">
          <SubTitle className="" subTitle="Our Team" />
          <Title
            className=" mt-[9px]   !mobile:text-4xl leading-[42px] !max-w-full"
            title="We are Professional"
          />
          <Description
            className=" mt-[25px] "
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          />
        </div>
        <div className="relative z-30 mt-[101px] gap-x-[60px] mx-[28px]  items-center mb-[134.4px] flex flex-col ipadMini:flex-row">
          {items.map((item) => (
            <ProfessionalItems key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="absolute z-0 top-[-7px] right-0">
        <BubbleBgTeam />
      </div>
    </div>
  );
};

export default OurTeam;
