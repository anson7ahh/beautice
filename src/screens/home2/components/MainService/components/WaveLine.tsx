import Image from "next/image";
import React from "react";

const WaveLine = () => {
  return (
    <div>
      <div className="absolute bottom-[-186px] min-w-[524px] left-0 z-0 hidden ipadMini:block">
        <Image
          className="w-full"
          src="/WaveLine.png"
          alt="WaveLine"
          width={524}
          height={350.34}
        />
      </div>
    </div>
  );
};

export default WaveLine;
