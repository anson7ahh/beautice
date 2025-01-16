"use client";
import Image from "next/image";
import { scrollToTop } from "../hooks/useButtonScrollToTopLogic";
export const ButtonScrollToTop = () => {
  return (
    <>
      <button
        onClick={scrollToTop}
        className="absolute top-[570px] right-[14px] ipadMini:right-[175.6px]  desktop:top-[467.34px] desktop:right-[-85px] mobile:top-[592px] mobile:right-[0px] tablet:top-[333px] tablet:right-[39px] ipadMini:top-[450.34px] h-[28px] w-[28px] tablet:h-[36px] tablet:w-[36px] "
      >
        <Image
          src="/ToTopButton.svg"
          alt="ToTopButton"
          width={36}
          height={36}
        />
      </button>
    </>
  );
};

export default ButtonScrollToTop;
