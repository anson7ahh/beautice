import { Button } from "@/components";
import Image from "next/image";
import React from "react";

const FormReqCall = () => {
  return (
    <div className="flex justify-center px-5">
      <form className="flex items-center">
        <input
          className="border border-gray-300 rounded-tl-[25px] w-[95%] tablet:w-[658px] placeholder:w-[361px] tablet:placeholder:w-[361px] rounded-bl-[25px] 
          pl-[37px] py-[4] pr-[260px] text-darkgray h-[56px]"
          type="number"
          placeholder="Insert your phone number here ..."
        />

        <Button className="bg-vividpink px-5 w-auto rounded-tr-[25px] tablet:w-[113px] rounded-br-[25px] flex items-center justify-center ml-[-1px] h-[56px]">
          <Image
            src="/phone-volume.svg"
            alt="phone-volume"
            height={24}
            width={24}
          />
        </Button>
      </form>
    </div>
  );
};

export default FormReqCall;
