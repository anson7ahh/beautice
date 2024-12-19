import Image from "next/image";
import React from "react";

const FooterBG = () => {
  return (
    <>
      <div className="absolute z-20 top-[61px] w-full h-full mobile:h-full  tablet:hidden ">
        <Image
          className="w-full h-full"
          src="/FooterBG.png"
          alt="FooterBG"
          width={1440}
          height={705.34}
        />
      </div>
    </>
  );
};

export default FooterBG;
