import Image from "next/image";
import React from "react";

const BottomBG = () => {
  return (
    <div className="absolute z-0 h-[125px] w-full  tablet:hidden desktop:hidden  hidden   ">
      <Image
        className="h-full w-full object-cover"
        src="/BottomBG.png"
        alt="BottomBG"
        width={1440}
        height={125}
      />
    </div>
  );
};

export default BottomBG;
