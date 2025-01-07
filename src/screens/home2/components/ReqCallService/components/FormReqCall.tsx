import { Button } from "@/components";
import Image from "next/image";
import React from "react";

const FormReqCall = () => {
  return (
    <form className="flex flex-col mt-[13px] items-end  w-[90%] tablet:w-[60%] mx-auto desktop:w-[658px]">
      <div className="flex ipadMini:w-[658px] mx-auto ipadMini:mx-0 w-full ">
        <input
          className="border border-gray-300 rounded-tl-[25px]  w-full  placeholder:w-[200px] tablet:placeholder:w-[361px] rounded-bl-[25px] 
          ipadMini:pl-[37px] pl-2  text-darkgray text-xs  tablet:text-base tracking-[0.2px] font-normal tablet:leading-6 tablet:tracking-[0.1em]"
          type="number"
          placeholder="Insert your phone number here ..."
        />

        <Button className="bg-vividpink pl-[14px] pr-[21px] pt-[18px] pb-[17px] w-auto rounded-tr-[25px] tablet:w-[130px] rounded-br-[25px] flex items-center justify-center ml-[-1px] ">
          <Image
            src="/phone-volume.svg"
            alt="phone-volume"
            height={28}
            width={38}
          />
        </Button>
      </div>
      <span className="mobile:text-xs text-[10px] italic font-normal leading-[18px] tracking-[0.1em] mt-[9px] text-right ">
        Toll free for our coverage areas.
      </span>
    </form>
  );
};

export default FormReqCall;
