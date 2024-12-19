import Image from "next/image";
import React from "react";

const BgHeader = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 z-[-10] hidden ipadMini:flex desktop:hidden">
        <Image
          className="w-full"
          src="/SlideBackground.svg"
          alt="HeaderBg"
          width={1266.42}
          height={743}
        />
      </div>
    </div>
  );
};

export default BgHeader;
