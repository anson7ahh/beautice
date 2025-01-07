"use client";
import Image from "next/image";
import React from "react";
import Item from "./components/Item";
import Icon from "./components/Icon";
import FooterBG from "./components/FooterBG";

import { items, icons } from "./constants";
import { ButtonScrollToTop } from "./components";

const Footer = () => {
  return (
    <footer className=" relative  bg-darkblue ipadMini:bg-transparent desktop:bg-inherit  w-full z-20  ">
      <div className="container w-full relative z-20  flex flex-col ">
        <div className="flex  mb-10 ipadMini:pt-[153px]  tablet:gap-x-[100px] desktop:mb-[140px] ipadMini:mb-[100px] tablet:mb-[140px] desktop:gap-x-0 mobile:mb-10 mobile:mt-10 ">
          <div className="desktop:mr-[157px] mobile:mx-auto tablet:mx-0 mobile:pt-[100px] tablet:pt-0 pt-[130px] mx-auto">
            <Image
              className="mb-[34px] mt-4 mobile:mx-auto tablet:mx-0 mx-auto"
              src="/FooterLogo.png"
              alt="logo"
              width={258}
              height={63}
            />
            <p className="font-normal tracking-[1.6px] text-[16px] text-white ml-[31px] mb-[22px] text-center tablet:text-left mobile:whitespace-nowrap">
              <span className="mobile:text-base font-bold  tracking-[0.1em] text-left text-sm">
                Beautice {""}
              </span>
              <span className="text-white mobile:text-base font-normal  tracking-[1.6px] text-left text-sm">
                is a Beauty Clinic WordPress Theme.
              </span>
            </p>
            <p
              className="text-white text-sm italic  font-medium tracking-[1.6px] ipadMini:text-left 
            ml-[31px] mb-[5px] mobile:text-center tablet:text-left text-center"
            >
              Baker Steet 101, NY, United States.
            </p>
            <div className="flex gap-y-2 tablet:gap-x-2 desktop:gap-x-[41px] tablet:flex-row flex-col mobile:mx-auto tablet:mx-0 ipadMini:ml-[31px] tablet:ml-[31px] text-center ">
              <p className="  text-white text-sm italic font-medium tracking-[1.6px] ipadMini:text-left mobile:mx-auto tablet:mx-0  ">
                +521 569 8966.
              </p>
              <p className="text-white text-center text-sm italic font-medium tracking-[1.4px] ipadMini:text-left mobile:mx-auto tablet:mx-0">
                mail@company.com.
              </p>
            </div>
          </div>
          <div className="desktop:mr-[203.5px]  flex-col gap-y-4   hidden tablet:flex">
            <span className="text-white text-lg font-semibold tracking-[1.8px] text-left mb-3 ">
              Pages
            </span>
            <div className="flex flex-col gap-y-[11px] items-start ml-1 ">
              {items.pages.map((item, index) => (
                <Item key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="  flex-col gap-y-[28px] hidden tablet:flex  ">
            <span className="text-white text-lg font-semibold  tracking-[1.8px] text-left ">
              {" "}
              Informations
            </span>
            <div className="flex flex-col gap-y-[11px] items-start  ml-1">
              {items.information.map((item, index) => (
                <Item key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between text-center tablet:text-left ipadMini:mb-0 mb-10 w-full flex-col tablet:flex-row mobile:mx-auto tablet:mx-0 desktop:mb-0  ">
          <div className="flex mx-auto flex-row  gap-x-[45px]  mobile:mx-auto tablet:mx-0 mobile:mb-5">
            {icons.map((icon, index) => (
              <Icon key={index} src={icon.src} alt={icon.alt} />
            ))}
          </div>
          <div className="text-white text-base font-normal  tracking-[1.6px]   mx-auto tablet:mx-0 mt-[20px] mobile:mt-0">
            <p className="tablet:whitespace-nowrap  max-w-[497px] whitespace-normal ">
              © AltDesain Studio 2021 - All right reserved.
            </p>
          </div>
        </div>
        <ButtonScrollToTop />
      </div>

      <FooterBG />
    </footer>
  );
};

export default Footer;
