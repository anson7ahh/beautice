"use client";
import Image from "next/image";
import { linkItems } from "./constants";
import LinkItem from "./components/LinkItem";
import Link from "next/link";
import { useClickOutSide } from "@/components/Header/hooks";
import { HamburgerIcon } from "../../../public/svg";
import { useAtom } from "jotai";
import { isOpenSignPopupAtom } from "@/stores/dialog";
import Profile from "../profile";
import authAtom from "@/screens/login/stores/authData";
import ModalUserAuth from "./components/ModalUserAuth";
import { SignOut } from "../profile/hooks/SignOut";
import { useSession } from "next-auth/react";
import { FC } from "react";
export interface Props {
  className?: string;
  src?: string;
  navClassName?: string;
  homeClassName?: string;
  hambergerIconColor?: string;
}

export const Header: FC<Props> = ({
  navClassName = "",
  src,
  className,
  homeClassName = "text-darkblue",
  hambergerIconColor,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useClickOutSide(false);
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useAtom(isOpenSignPopupAtom);
  const [auth] = useAtom(authAtom);

  const handleClickSignInResponsive = () => {
    setIsOpen(true);
  };
  const handleClickSignIn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`desktop:max-w-[1140px] mx-auto ipadMini:max-w-[1100px] max-w-full ipadMini:pt-[77px] pt-[30px] flex justify-between  items-center h-[63px]  z-10 px-5 ipadMini:px-0 ${className}`}
      >
        <div className="mobile:max-w-[258px] w-[50%] ml-[-5px] ">
          <Link href="/">
            <Image
              className=""
              src={src || "/MainLogo.png"}
              alt="logo"
              width={258}
              height={63}
            />
          </Link>
        </div>
        <nav
          className={`ipadMini:flex gap-x-[38px] items-center hidden mt-[-9px] ${navClassName}`}
        >
          {linkItems.map((item, index) => (
            <LinkItem key={index} {...item} homeClassName={homeClassName} />
          ))}
          {session ? (
            <Profile />
          ) : (
            <button
              className="whitespace-nowrap font-medium leading-6 tracking-wide ipadMini:text-darkgray text-black"
              onClick={() => handleClickSignIn()}
            >
              Sign In
            </button>
          )}
          <div className="bg-vividpink mr-[2px] min-w-[158px] flex items-center h-[52px] justify-center rounded-[50px] mt-[-1px]">
            <Link
              className="text-white text-base font-semibold leading-[24px] tracking-[0.1em]"
              href="contact"
            >
              Contact
            </Link>
          </div>
        </nav>{" "}
        <div
          className="ipadMini:hidden mobile:w-[30px] mobile:h-[30px] "
          onClick={() => setIsComponentVisible(true)}
        >
          <HamburgerIcon
            className=" mobile:w-[30px] mobile:h-[30px] w-[20px] h-[20px]"
            stroke={hambergerIconColor}
          />
        </div>
      </div>

      <div className="w-full relative">
        <div
          ref={ref}
          className={`fixed  z-30 right-0 w-[50%] mobile:w-[30%] px-5 pt-4 bg-white transition-all  duration-500 top-0 bottom-0 ${
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

            <li className="mb-2 ">
              <Link href="/contact">Contact</Link>
            </li>

            {auth?.token ? (
              <>
                <li className="mb-2">
                  <Link href="/profile">profile</Link>
                </li>
                <li className="mb-2">
                  <SignOut />
                </li>
              </>
            ) : (
              <li className="mb-2">
                <button
                  className="whitespace-nowrap font-medium leading-6 tracking-wide ipadMini:text-darkgray text-black"
                  onClick={() => handleClickSignInResponsive()}
                >
                  Sign In
                </button>
              </li>
            )}
          </ul>
        </div>
        {isComponentVisible && (
          <div
            className={`fixed  z-20 left-0 w-full  opacity-75 ipadMini:hidden bg-gray-600 top-0 bottom-0 }`}
          ></div>
        )}
      </div>
      {isOpen && <ModalUserAuth />}
    </>
  );
};
