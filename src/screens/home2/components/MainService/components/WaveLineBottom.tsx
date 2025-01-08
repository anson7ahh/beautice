import Image from "next/image";
import React from "react";

const WaveLineBottom = () => {
  return (
    <div className="absolute top-[664px] right-0  hidden ipadMini:block max-h-[350px]">
      <Image
        className=""
        src="/WaveLine2.png"
        alt="WaveLine2"
        height={350}
        width={524}
      />
    </div>
  );
};

export default WaveLineBottom;
