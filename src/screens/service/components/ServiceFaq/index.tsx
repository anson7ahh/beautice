"use client";
import React from "react";
import { useServiceFaqLogic } from "./hooks";
import { items } from "./constants";
import Image from "next/image";

const ServiceFaq = () => {
  const { sectionIndex, handClickSection } = useServiceFaqLogic();
  return (
    <>
      <div className="container flex flex-col justify-center items-center text-center max-w-[972px] ">
        <span className=" text-4xl font-semibold leading-[45px] text-darkblue mb-[21px]">
          Services FAQ’s
        </span>
        <Image src="/LineTittle.png" alt="LineTittle" width={40} height={4} />
        <div className="flex flex-col mt-[89px] w-full justify-between">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col ">
              <div className="flex justify-between ">
                <div
                  className={`${item.titleClassName} pl-[35px] text-darkblue mb-4`}
                >
                  {item.title}
                </div>
                <button onClick={() => handClickSection(index)}>
                  <Image
                    className={`${
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
                <div className="bg-[#F6F7FF] text-left border  border-t-4 border-t-blue-500 border-t-solid pt-[52px] pl-[63px] pb-[53px] pr-[76px] max-w-[972px] text-sm italic font-normal leading-[21px] tracking-[0.1em]">
                  {item.description}
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
