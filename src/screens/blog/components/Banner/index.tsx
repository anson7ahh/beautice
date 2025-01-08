import { Header } from "@/components";
import Background from "@/components/Background";

import React from "react";

const Banner = () => {
  return (
    <div className="">
      <Header homeClassName="!text-darkblue" />
      <Background
        className="mt-[63px] max-h-[285px]"
        src="/BannerBlog.png"
        alt="BannerBlog"
        width={1440}
        height={285}
      >
        <div className="container flex justify-between pt-[121px] pb-[120px] px-5 ipadMini:px-0">
          <p className="text-4xl font-semibold leading-[45px] text-left text-white ">
            Blog
          </p>

          <p className="text-base font-medium leading-6 tracking-[0.1em] text-darkgray mr-[-2px] mt-[10px]">
            Home • Blog
          </p>
        </div>
      </Background>
    </div>
  );
};

export default Banner;
