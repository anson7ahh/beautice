import { Button } from "@/components/commons";
import React from "react";

export const FormContactUs = () => {
 
  return (
    <div>
      <form className="" action="">
        <div className="flex flex-col gap-[38.32px] ">
          <div className="flex flex-col gap-y-5 w-auto  justify-between mobile:flex-row">
            <input
              className="border w-full border-[rgba(217,221,254,1)] rounded-[15px] p-[17px_84.21px_16.58px_24px] h-[61.58px] mobile:w-[242.21px]"
              type="text"
              placeholder="First name"
            />
            <input
              className="border w-full border-[rgba(217,221,254,1)] rounded-[15px] p-[17px_84.21px_16.58px_24px] h-[61.58px] mobile:w-[242.21px]"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            type="email"
            className="border border-[rgba(217,221,254,1)] rounded-[15px] p-[17px_84.21px_16.58px_24px] h-[61.58px]"
            placeholder="Email address"
          />
          <input
            type="text"
            className="border border-[rgba(217,221,254,1)] rounded-[15px] p-[17px_84.21px_16.58px_24px] h-[61.58px]"
            placeholder="Subject message"
          />
          <textarea
            className="border border-[rgba(217,221,254,1)] p-[25.32px_267px_186.16px_24px] w-[520px] h-[239.47px] rounded-[15px]"
            placeholder="Your inquiry here"
          ></textarea>
        </div>
        <Button className="shadow-[0px_17px_22px_0px_rgba(255,237,246,1)] w-[248px] p-[19px_0] bg-[#FF64AE] rounded-full text-white text-center font-semibold text-base leading-[24px] tracking-[1.6px] mt-[53.84px]">
          Send Message
        </Button>
      </form>
    </div>
  );
};
