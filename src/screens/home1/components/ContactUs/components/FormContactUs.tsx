import { Button } from "@/components";
import React from "react";

export const FormContactUs = () => {
  return (
    <div>
      <form className="w-full mobile:w-[80%] ipadMini:w-auto mx-auto" action="">
        <div className="flex flex-col gap-[38.32px] ">
          <div className="flex flex-col gap-y-5 w-auto  justify-between mobile:flex-row  ">
            <input
              className="border w-full   border-[rgba(217,221,254,1)] rounded-[15px] p-[14px_84.21px_16.58px_23px] h-[61.58px] mobile:w-[40%]
              ipadMini:w-[242.21px] placeholder:text-base placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[0.1em]"
              type="text"
              placeholder="First name"
            />
            <input
              className="border w-full mobile:w-[40%] border-[rgba(217,221,254,1)] rounded-[15px] p-[14px_84.21px_16.58px_27px] h-[61.58px]  ipadMini:w-[242.21px] placeholder:text-base placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[0.1em]"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            type="email"
            className="border border-[rgba(217,221,254,1)] rounded-[15px] p-[14px_84.21px_16.58px_23px] h-[61.58px] placeholder:font-normal placeholder:text-base placeholder:leading-[24px] placeholder:tracking-[0.1em]"
            placeholder="Email address"
          />
          <input
            type="text"
            className="border border-[rgba(217,221,254,1)] rounded-[15px] p-[14px_84.21px_16.58px_23px] h-[61.58px] placeholder:font-normal placeholder:text-base placeholder:leading-[24px] placeholder:tracking-[0.1em]"
            placeholder="Subject message"
          />
          <textarea
            className="border w-full  ipadMini:w-[520px] border-[rgba(217,221,254,1)] placeholder:w-[300px] pt-[25.32px]  pb-[186.16px] pl-[23px]  h-[239.47px] rounded-[15px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[0.1em]"
            placeholder="Your inquiry here"
          ></textarea>
        </div>
        <Button className="shadow-[0px_17px_22px_0px_rgba(255,237,246,1)] w-[248px] px-[21px] py-[18px] bg-[#FF64AE] rounded-full text-white text-center font-semibold text-base leading-[24px] tracking-[1.6px] mt-[53.84px]">
          Send Message
        </Button>
      </form>
    </div>
  );
};
