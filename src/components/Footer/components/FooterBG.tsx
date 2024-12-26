import Image from "next/image";
import React from "react";

const FooterBG = () => {
  return (
    <>
      <div className="absolute z-10 top-0 w-full h-full bottom-[-378px]    desktop:hidden tablet:hidden  hidden">
        <Image
          className="w-full h-full object-contain"
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
