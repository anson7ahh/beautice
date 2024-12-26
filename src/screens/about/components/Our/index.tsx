import Image from "next/image";
import React from "react";
import { Logos } from "./constrants";

const Our = () => {
  return (
    <div className="container flex flex-col gap-y-[117px] justify-center items-center px-3">
      <div className=" flex gap-x-[234px] mobile:ml-[55.3px] flex-col tablet:flex-row mx-auto">
        <div>
          <Image
            className="mt-[25px] w-full object-contain"
            src="/Illustration-1.png"
            alt="Illustration-1"
            height={234.71}
            width={373.51}
          />
        </div>
        <div className="flex flex-col tablet:text-left text-center justify-center">
          <span className="text-vividpink mb-[11px] mt-10 tablet:mt-0 text-base font-semibold leading-5">
            Our Vision
          </span>
          <span className="text-4xl font-semibold leading-[45px] text-darkblue mb-[15px] max-w-[411px]">
            Be the best and go international
          </span>
          <span className="max-w-[450px] text-base font-normal  tracking-widest text-darkgray mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
          </span>
          <span className="max-w-[450px] text-base font-normal  text-darkgray tracking-widest">
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </span>
        </div>
      </div>
      <div className="flex gap-x-[140px] flex-col tablet:flex-row justify-center items-center w-full">
        <div className="flex flex-col tablet:text-left text-center ">
          <span className="text-base font-semibold leading-5 text-vividpink mb-3">
            Our Mission
          </span>
          <span className="text-4xl font-semibold leading-[45px] text-darkblue max-w-[545px] mb-[9x]">
            Special & premium service to any clients
          </span>
          <span className="text-base font-normal  tracking-[0.1em] text-darkgray max-w-[483px] mb-[9x]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
          </span>
          <span className="text-base font-normal  tracking-[0.1em] text-darkgray max-w-[483px]">
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </span>
        </div>
        <div className="mt-10 tablet:mt-0 ">
          <Image
            className="w-full object-contain"
            src="/Illustration.png"
            alt="Illustration"
            height={251.24}
            width={430.28}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-[100px] w-full">
        <div className="flex flex-col mx-auto text-center">
          <span className="text-base font-semibold leading-5 text-vividpink mb-[11px]">
            Our Clients
          </span>
          <span className="text-3xl font-semibold leading-[45px] text-darkblue tracking-[3.5px] mb-[20px] max-w-[80%]">
            Well-known agencies
          </span>
          <span className="text-darkgray text-base font-normal  tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
        </div>
        <div className="flex flex-wrap  ipadMini:justify-between  px-0 tablet:px-[133px] w-full justify-center">
          {Logos.map((Logo, index) => (
            <Image
              key={index}
              src={Logo.src}
              alt={Logo.alt}
              height={80}
              width={147}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our;
