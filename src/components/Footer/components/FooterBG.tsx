import Image from "next/image";
import React from "react";

const FooterBG = () => {
  return (
    <>
      <div
        className="absolute z-10 desktop:top-[-33px] w-full  max-h-[705.34px]
      desktop:block tablet:hidden  hidden  ipadMini:block ipadMini:top-0 ipadMini: "
      >
        <Image
          className="w-full  max-h-[705.34px]"
          src="/BgFooter.png"
          alt="BgFooter"
          width={1440}
          height={705.34}
        />
      </div>
    </>
  );
};

export default FooterBG;
