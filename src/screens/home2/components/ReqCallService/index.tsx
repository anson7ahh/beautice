import React from "react";
import BgReqCall from "./components/BgReqCall";
import FormReqCall from "./components/FormReqCall";

const ReqCallService = () => {
  return (
    <div className="relative mt-[170px] mb-[162px]">
      <div className=" container relative z-20   flex gap-x-[90px] flex-col ipadMini:flex-row gap-y-20">
        <div className="flex flex-col text-center mx-auto  ipadMini:text-left ipadMini:mx-0 ipadMini:max-w-[391px]">
          <span className="text-4xl font-semibold leading-[45px]  text-darkblue mb-[18px]">
            Request call services
          </span>
          <p className="text-base font-normal leading-6 tracking-[0.1em]  text-darkgray max-w-[391px]">
            Lorem ipsum dolor sit amet, consect adipiscing elit{" "}
            <span className="text-base font-semibold leading-6 tracking-[0.1em]  text-darkblue">
              Contact Us.
            </span>
          </p>
        </div>
        <FormReqCall />
      </div>
      <BgReqCall />
    </div>
  );
};

export default ReqCallService;
