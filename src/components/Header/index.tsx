"use client";

import BgHeader from "./components/BgHeader";
import { Button } from "../commons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useClickOutSide } from "./components/hooks";

export const Header = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useClickOutSide(false);
  return (
    <div>
      <header className="container font-medium w-full relative overflow-hidden ">
        <div className="ipadMini:pt-[50px]  flex  items-center h-[63px] gap-x-[190px] relative z-10  pt-10  ">
          <div className="w-full">
            <Image
              className="object-contain"
              src="/MainLogo.png"
              alt="logo"
              width={258}
              height={63}
            />
          </div>

          <nav className=" ipadMini:flex gap-x-10 items-center hidden ">
            <div className="flex gap-x-1 items-center">
              <span className="text-base text-darkslateblue">Home</span>
              <Image
                className="object-contain "
                src="/PlusIcon.png"
                alt="icon"
                width={8}
                height={10}
              />
            </div>
            <Link className="text-xs text-darkgray" href="#">
              About
            </Link>
            <Link className="text-xs text-darkgray" href="#">
              Service
            </Link>
            <Link className="text-xs text-darkgray" href="#">
              Gallery
            </Link>
            <Link className="text-xs text-darkgray" href="#">
              Blog
            </Link>
            <Link
              className="bg-vividpink text-white text-center leading-[54px] h-[54px] 
                        cursor-pointer  rounded-full w-[158px] tracking-[2px]"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div
            className="ipadMini:hidden"
            onClick={() => setIsComponentVisible(true)}
          >
            <Image
              src="/hamburger-menu.svg"
              alt="hamburger"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="flex mt-[159px]  ipadMini:flex-row flex-col px-5 w-full items-center  gap-y-10 text-center ipadMini:text-left gap-x-[29px]">
          <div className="flex flex-col desktop:ml-[39px]">
            <p className=" font-semibold text-5xl leading-[60px] ipadMini:max-w-[430px] max-w-[100%]  ">
              Clinic & beauty consultant
            </p>
            <p className="ipadMini:max-w-[474px] max-w-[100%] py-1 leading-6 font-medium text-base tracking-[1.6px] text-darkblue ">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <Button
              className="mx-auto ipadMini:mx-0 cursor-pointer bg-vividpink text-base rounded-full font-medium w-[200px] h-[58.36px] text-center
             text-white tracking-[2px] leading-[58.36px] mt-[28px]"
            >
              More Details
            </Button>
          </div>
          <div className="   ">
            <Image
              className=""
              src="/banner.png"
              alt="banner"
              width={601.5}
              height={397.5}
            />
          </div>
        </div>
      </header>

      <div
        ref={ref}
        className={`fixed  z-30 right-0 w-[300px] px-10 pt-10 bg-white transition-all  duration-500 top-0 bottom-0 ${
          isComponentVisible ? "translate-x-0 " : "translate-x-full "
        }`}
      >
        <div
          className="justify-items-end "
          onClick={() => setIsComponentVisible(false)}
        >
          <Image src="/close.svg" alt="close" width={30} height={30} />
        </div>
        <ul>
          <li className="mb-2">
            <Link href="#">Home</Link>
          </li>
          <li className="mb-2">
            <Link href="#">About</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Service</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Gallery</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <BgHeader />
    </div>
  );
};
