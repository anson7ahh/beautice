import { MainServiceItem } from "./components";
import React from "react";
import { items } from "./constants";

const MainService = () => {
  return (
    <>
      <div className="container px-5 ">
        <div className="flex flex-col items-center text-center mt-[300px]">
          <p className=" text-vividpink text-base font-semibold leading-5 mb-4">
            Main Services
          </p>
          <p className=" text-darkblue text-4xl font-semibold leading-[45px] mb-4 desktop:max-w-[440px] ">
            Learn services to focus on your beauty
          </p>
          <p className="max-w-[848px] h-[51px] font-normal text-base leading-6 tracking-[1.6px] text-darkgray">
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non
            massa. Non parturient amet, feugiat tellus sagittis, scelerisque
            eget nulla turpis.
          </p>
        </div>
        <div className="relative z-30 mt-[87px] gap-[56px] justify-center items-center mb-[134.4px] mx-auto flex flex-col w-[30%] tablet:flex tablet:flex-row   tablet:w-full ">
          {items.map((item) => (
            <MainServiceItem
              key={item.id}
              className="bg-white flex flex-col rounded-[42px] shadow-[0px_25px_50px_25px_rgba(246,247,255,1)] ipadMini:min-w-[343px] tablet:min-w-[25%] min-w-[343px]"
              {...item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainService;
