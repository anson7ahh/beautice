import Image from "next/image";
import React from "react";

const FooterBG = () => {
  return (
    <>
      <div
        className="absolute z-10 desktop:top-[-33px] w-full  
      desktop:block tablet:hidden  hidden  ipadMini:block ipadMini:top-0 ipadMini: "
      >
        <Image
          className="w-full "
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
