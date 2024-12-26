import React from "react";
import BgReqCall from "./components/BgReqCall";
import FormReqCall from "./components/FormReqCall";

const ReqCallService = () => {
  return (
    <div className="relative mb-[400px]">
      <div className="container">
        <div className=" relative z-20  top-[150px] flex gap-x-[90px] flex-col ipadMini:flex-row gap-y-20">
          <div className="flex flex-col text-center ipadMini:text-left mx-auto ipadMini:mx-0">
            <span className="text-4xl font-semibold leading-[45px]  text-darkblue">
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
      </div>
      <BgReqCall />
    </div>
  );
};

export default ReqCallService;
