import { Button } from "@/components";
import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <div className="mobile:min-w-[350px] min-w-full h-[67px] rounded-[50px] flex   border-2  border-black overflow-hidden ">
      <input
        className="w-full pl-[25px] py-5 focus:outline-none focus:ring-0 placeholder:max-w-[185px]  placeholder:text-base placeholder:font-normal placeholder:leading-6 placeholder:tracking-[0.1em] placeholder:text-left  "
        type="text"
        placeholder="Search here ..."
      />
      <Button className="bg-[#172176]  px-[28px] h-[66px]">
        <Image
          className="w-[25px] h-[25px] "
          src="/SearchButtom.svg"
          alt="SearchButtom"
          width={25}
          height={25}
        />
      </Button>
    </div>
  );
};

export default SearchInput;
