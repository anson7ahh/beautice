"use client";

import BgHeader from "./components/BgHeader";
import Image from "next/image";
import React from "react";

import { Button, Header } from "@/components";

export const Banner = () => {
  return (
    <div>
      <header className="container font-medium w-full    ">
        <Header homeClassName="!text-darkblue" />
        <div
          className="flex mt-[182px] ipadMini:flex-row flex-col px-5 ipadMini:px-0 w-full items-center  gap-y-10 text-center ipadMini:text-left 
        gap-x-[22px] "
        >
          <div className="flex flex-col ipadMini:ml-[39px] ipadMini:mt-[-15px] w-full max-w-[474px]">
            <p className=" font-semibold text-5xl leading-[60px] ipadMini:max-w-[430px] max-w-[100%] text-darkblue ">
              Clinic & beauty consultant
            </p>
            <p className="ipadMini:max-w-[474px] max-w-[100%] py-1 leading-6 font-medium text-base tracking-[1.6px] text-darkblue desktop:mt-[4px]">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <Button
              className="mx-auto ipadMini:mx-0 cursor-pointer bg-vividpink hover:bg-red-600  rounded-full  w-[200px] h-[58.36px] 
             text-white   mt-[27px]  text-base font-semibold leading-6 tracking-[0.1em] text-center "
            >
              More Details
            </Button>
          </div>
          <div className=" w-full ">
            <Image
              className="tablet:mx-auto ipadMini:mx-0 w-full object-contain "
              src="/banner.png"
              alt="banner"
              width={601.5}
              height={397.5}
            />
          </div>
        </div>
      </header>

      <BgHeader />
    </div>
  );
};
