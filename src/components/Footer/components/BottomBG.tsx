import Image from "next/image";
import React from "react";

const BottomBG = () => {
  return (
    <div className="absolute z-[-20] mobile:bottom-[-60px] h-[100px] w-full bottom-[-62px] mobile:h-1/2 tablet:hidden     ">
      <Image
        className="h-full w-full"
        src="/BottomBG.png"
        alt="BottomBG"
        width={1440}
        height={125}
      />
    </div>
  );
};

export default BottomBG;
