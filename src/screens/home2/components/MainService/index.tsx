import React from "react";
import { mainItems } from "./commons";
import MainServiceItem from "./components/MainServiceItem";

const MainService = () => {
  return (
    <div className="flex flex-col mt-[157.64px]">
      <div className="flex flex-col justify-center text-center">
        <span className="text-base font-semibold leading-5 text-vividpink">
          Main Services
        </span>
        <span className="text-4xl font-semibold leading-[45px] text-darkblue">
          Our focus services
        </span>
        <span className="text-base font-normal leading-6 tracking-[0.1em] text-darkgray">
          Lorem ipsum dolor sit amet.
        </span>
      </div>
      <div>
        {mainItems.map((item, index) => (
          <MainServiceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MainService;
