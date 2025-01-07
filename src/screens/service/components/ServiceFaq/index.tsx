"use client";
import React from "react";
import { useServiceFaqLogic } from "./hooks";
import { items } from "./constants";
import Image from "next/image";

const ServiceFaq = () => {
  const { sectionIndex, handClickSection } = useServiceFaqLogic();
  return (
    <>
      <div className="container flex flex-col justify-center items-center text-center max-w-[972px] mt-[300px] mb-[151.66px]">
        <span className=" text-4xl font-semibold leading-[45px] text-darkblue  ml-[11px]">
          Services FAQ’s
        </span>
        <Image
          className="mt-[17px]"
          src="/LineTittle.png"
          alt="LineTittle"
          width={41}
          height={4}
        />
        <div className="flex flex-col mt-[31px] w-full justify-between">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col mt-[37px] px-5 ipadMini:px-0"
            >
              <div className="flex justify-between mr-[22px] text-left">
                <div
                  className={`${item.titleClassName}   text-darkblue text-base font-semibold leading-6 tracking-[0.1em] `}
                >
                  {item.title}
                </div>
                <button onClick={() => handClickSection(index)}>
                  <Image
                    className={` -mt-1 transition-all transform duration-500 ${
                      sectionIndex === index ? "rotate-0" : "rotate-180"
                    } `}
                    src="/Vectorplay.svg"
                    alt="Vectorplay"
                    width={15.63}
                    height={10.09}
                  />
                </button>
              </div>
              {sectionIndex === index && (
                <div
                  className="bg-[#F6F7FF] text-left border mt-4  border-t-4 border-t-blue-500 border-t-solid pt-[46px] 
                pl-[74px] pb-[53px] pr-[76px] max-w-[972px] text-sm italic font-normal leading-[21px] tracking-[0.1em]"
                >
                  <div>{item.description}</div>
                  <div className="mt-[20px]">{item.moreDescription}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceFaq;
