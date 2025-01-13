import { ProfessionalItems } from "./components";
import React from "react";
import { items } from "./constants";

const Professional = () => {
  return (
    <div className="container relative z-30  text-center max-w-[1085px] mx-auto mt-[141.2px] px-5 ipadMini:px-0 ">
      <div className="flex text-center items-center flex-col ml-[-2px]">
        <p className="text-vividpink text-base font-semibold leading-5 mb-[13px]">
          Professional Teams
        </p>
        <p className="text-darkblue text-4xl font-semibold leading-[45px] mb-5">
          The Professional expert
        </p>
        <p className="h-[51px] font-normal text-base leading-6 tracking-[1.6px] text-[#8B8B8B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
      <div className="relative z-30 mt-[89px] justify-center items-start mb-[134.4px] gap-x-[26px] flex flex-col ipadMini:flex-row">
        {items.map((item) => (
          <ProfessionalItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Professional;
