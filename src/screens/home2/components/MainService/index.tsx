import React from "react";
import { iconItems, mainItems } from "./constants";
import MainServiceItem from "./components/MainServiceItem";
import WaveLine from "./components/WaveLine";
import BgMainService from "@/components/Background";
import { Item } from "./components/Items";
import WaveLineBottom from "./components/WaveLineBottom";

const MainService = () => {
  return (
    <>
      <div className="relative  z-20 ">
        <div className="container flex flex-col mt-[157.64px] relative z-20 ">
          <div className="flex flex-col justify-center text-center ">
            <span className="text-base font-semibold leading-5 text-vividpink">
              Main Services
            </span>
            <span className="text-4xl font-semibold leading-[45px] text-darkblue mt-[11px]">
              Our focus services
            </span>
            <span className="text-base font-normal leading-6 tracking-[0.1em] text-darkgray mt-[22px] ">
              Lorem ipsum dolor sit amet.
            </span>
          </div>
          <div className="flex flex-col gap-y-10  tablet:gap-x-[64px] justify-center mt-[75px] tablet:flex-row ">
            {mainItems.map((item, index) => (
              <MainServiceItem key={index} {...item} />
            ))}
          </div>
        </div>
        <WaveLine />
      </div>

      <BgMainService
        className="mt-[128px] "
        classNameImg=""
        src="/BackgroundMainService.png"
        alt="BackgroundMainService"
        width={1440}
        height={697.5}
      >
        <div
          className="ipadMini:pt-[276px] pt-[80px] tablet:bg-inherit tablet:text-left text-center flex flex-col 
        tablet:flex-row mobile:pl-[34px] tablet:pt-[262px] px-2 gap-y-5 mx-auto w-full"
        >
          <div className="ipadMini:mr-[139px] pt-[40px] mobile:pl-[154px] ">
            <div className="text-4xl font-semibold leading-[45px]  mb-[21px] text-white  ">
              Why choosing us?
            </div>
            <div className="max-w-[486px] text-base font-normal mx-auto tracking-[0.1em]  text-[#D8DCFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-[20px] mobile:gap-x-[70px] gap-y-[43px] mb-20 mx-auto ">
            {iconItems.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </div>
        </div>
        <WaveLineBottom />
      </BgMainService>
    </>
  );
};

export default MainService;
