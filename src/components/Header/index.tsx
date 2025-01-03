"use client";
import Image from "next/image";
import { linkItems } from "./constants";
import LinkItem from "./components/LinkItem";
import Link from "next/link";
import { useClickOutSide } from "@/components/Header/hooks";
import { Props } from "./types";
import { FC } from "react";

export const Header: FC<Props> = ({
  navClassName,
  src,
  className,
  homeClassName = "text-darkblue",
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useClickOutSide(false);

  return (
    <>
      <div
        className={`container pt-[77px]  flex justify-between  items-center h-[63px] relative z-10 ${className} px-5 ipadMini:px-0 `}
      >
        <div className="mobile:w-full w-[50%]">
          <Image
            className=""
            src={src || "/MainLogo.png"}
            alt="logo"
            width={258}
            height={63}
          />
        </div>

        <nav
          className={` ipadMini:flex gap-x-[52px] items-center hidden mt-[-9px] ${navClassName}`}
        >
          {linkItems.map((item, index) => (
            <LinkItem key={index} {...item} homeClassName={homeClassName} />
          ))}
          <div className="bg-vividpink px-[41px] py-[14.9px] text-center rounded-[50px] mt-[-4px]">
            <Link
              className="text-white text-base font-semibold leading-[24px] tracking-[0.1em]"
              href="#"
            >
              Contact
            </Link>
          </div>
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
      <div className="w-full relative">
        <div
          ref={ref}
          className={`fixed  z-30 right-0 w-[50%] mobile:w-[30%] px-5 pt-10 bg-white transition-all  duration-500 top-0 bottom-0 ${
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
              <Link href="/home2">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/about">About</Link>
            </li>
            <li className="mb-2">
              <Link href="/service">Service</Link>
            </li>
            <li className="mb-2">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {isComponentVisible && (
          <div
            className={`fixed  z-20 left-0 w-full  opacity-75 ipadMini:hidden bg-gray-600 top-0 bottom-0 }`}
          ></div>
        )}
      </div>
    </>
  );
};
