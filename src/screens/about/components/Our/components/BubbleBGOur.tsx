import Image from "next/image";
import React from "react";

const BubbleBGOur = () => {
  return (
    <div className="absolute top-[59px] z-0 hidden mobile:block">
      <Image
        src="/BubbleBGFooterAbout.png"
        alt="BubbleBGFooterAbout"
        height={1223}
        width={1213}
      />
    </div>
  );
};

export default BubbleBGOur;
