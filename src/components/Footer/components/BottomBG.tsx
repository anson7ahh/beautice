import Image from "next/image";
import React from "react";

const BottomBG = () => {
  return (
    <div
      className="absolute z-0 w-full 
     tablet:hidden desktop:block  hidden ipadMini:block desktop:bottom-[-72px] ipadMini:bottom-[-60px] "
    >
      <Image
        className=" w-full "
        src="/BottomBG.png"
        alt="BottomBG"
        width={1440}
        height={125}
      />
    </div>
  );
};

export default BottomBG;
