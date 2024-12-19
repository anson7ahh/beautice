
import Image from "next/image";
import React from "react";
import Item from "./components/Item";
import Icon from "./components/Icon";
import FooterBG from "./components/FooterBG";
import BottomBG from "./components/BottomBG";

interface Item {
  src: string;
  alt: string;
  name?: string;
}

interface GroupedItems {
  pages: Item[];
  Infomation: Item[];
}
const Items: GroupedItems = {
  pages: [
    {
      src: "/Vector.svg",
      name: "Home",
      alt: "Vector",
    },
    {
      src: "/Vector.svg",
      name: "About",
      alt: "Vector",
    },
    {
      src: "/Vector.svg",
      name: "Services",
      alt: "Vector",
    },
    {
      src: "/Vector.svg",
      name: "Gallery",
      alt: "Vector",
    },
    {
      src: "/Vector.svg",
      name: "Team",
      alt: "Vector",
    },
  ],
  Infomation: [
    {
      src: "/Vector.svg",
      name: "Terms & conditions",
      alt: "Vector",
    },
    {
      src: "/Vector.svg",
      name: "Privacy policy",
      alt: "Vector",
    },
    {
      src: "/Vector.svg",
      name: "Blog",
      alt: "Vector",
    },
    {
      src: "/Vector.svg",
      name: "Contact",
      alt: "Vector",
    },
  ],
};

const Icons: Item[] = [
  { src: "/facebook-f.svg", alt: "facebook" },
  { src: "/twitter.svg", alt: "twitter" },
  { src: "/linkedin-in.svg", alt: "linkedin-in" },
  { src: "/youtube.svg", alt: "youtube" },
  { src: "/instagram.svg", alt: "Instagram" },
];
const Footer = () => {
  return (
    <footer className=" relative mt-[100.66px] tablet:bg-darkblue tablet:w-full w-full ">
      <div className="container w-full relative z-30  flex flex-col tablet:px-10 ">
        <div className="flex justify-center mb-10 pt-20  tablet:gap-x-[150px] tablet:mb-[150px] desktop:gap-x-0 mobile:mb-10 ">
          <div className="desktop:mr-[155px] mobile:mx-auto tablet:mx-0 mobile:pt-20 tablet:pt-0">
            <Image
              className="mb-[34px] mt-4 mobile:mx-auto tablet:mx-0 mx-auto"
              src="/FooterLogo.png"
              alt="logo"
              width={258}
              height={63}
            />
            <p className="font-normal tracking-[1.6px] text-[16px] text-white ml-[31px] mb-[22px] text-center tablet:text-left">
              <span className="mobile:text-base font-bold  tracking-[0.1em] text-left text-sm">
                Beautice
              </span>
              <span className="text-white mobile:text-base font-normal  tracking-[1.6px] text-left text-sm">
                is a Beauty Clinic WordPress Theme.
              </span>
            </p>
            <p className="text-white text-sm italic font-medium tracking-[1.4px] ipadMini:text-left ml-[31px] mb-[4px] mobile:text-center tablet:text-left text-center">
              Baker Steet 101, NY, United States.
            </p>
            <div className="flex gap-y-2 tablet:gap-x-2 tablet:flex-row flex-col mobile:mx-auto tablet:mx-0 ipadMini:ml-[31px] tablet:ml-[31px] text-center ">
              <p className="  text-white text-sm italic font-medium tracking-[1.6px] ipadMini:text-left mobile:mx-auto tablet:mx-0  ">
                +521 569 8966.
              </p>
              <p className="text-white text-center text-sm italic font-medium tracking-[1.4px] ipadMini:text-left mobile:mx-auto tablet:mx-0">
                mail@company.com.
              </p>
            </div>
          </div>
          <div className="desktop:mr-[203.5px]  flex-col gap-y-2   hidden tablet:flex">
            <span className="text-white text-lg font-semibold tracking-[1.8px] text-left mb-3 ">
              Pages
            </span>
            <div className="flex flex-col gap-y-[11px] items-start ">
              {Items.pages.map((item, index) => (
                <Item
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  name={item.name}
                />
              ))}
            </div>
          </div>
          <div className="  flex-col gap-y-2 hidden tablet:flex  ">
            <span className="text-white text-lg font-semibold  tracking-[1.8px] text-left mb-3">
              {" "}
              Informations
            </span>
            <div className="flex flex-col gap-y-[11px] items-start">
              {Items.Infomation.map((item, index) => (
                <Item
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center  tablet:mb-10  flex-col tablet:flex-row mobile:mx-auto tablet:mx-0 tablet:gap-x-[200px]  ">
          <div className="flex mx-auto flex-row ipadMini:ml-[30px] ipadMini:justify-between gap-x-[41px] desktop:mr-[160px] mobile:mx-auto tablet:mx-0 mobile:mb-5">
            {Icons.map((icon, index) => (
              <Icon key={index} src={icon.src} alt={icon.alt} />
            ))}
          </div>
          <div className="text-white text-base font-normal  tracking-[1.6px] text-left max-w-full mx-auto tablet:mx-0 ">
            <p className="whitespace-nowrap w-full ">
              © AltDesain Studio 2021 - All right reserved.
            </p>
          </div>
        </div>
        <div
          className="absolute top-[287px] right-[50px] ipadMini:right-[175.6px] ipadMini:top-[366.34px] desktop:top-[347.34px]
                 desktop:right-0 mobile:top-[360px] mobile:right-[0px] tablet:top-[333px] tablet:right-[39px] "
        >
          <Image
            src="/ToTopButton.svg"
            alt="ToTopButton"
            width={36}
            height={36}
          />
        </div>
      </div>
      <FooterBG />
      <BottomBG />
    </footer>
  );
};

export default Footer;
