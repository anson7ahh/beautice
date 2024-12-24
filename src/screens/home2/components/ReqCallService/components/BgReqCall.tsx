import Image from "next/image";
import React from "react";

const BgReqCall = () => {
  return (
    <div className="absolute top-0 hidden tablet:block ">
      <Image
        src="/BG-Elements.png"
        alt="BG-Elements"
        height={316.98}
        width={361.08}
      />
    </div>
  );
};

export default BgReqCall;
