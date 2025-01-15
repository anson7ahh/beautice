import Background from "@/components/Background";
import Description from "@/components/Description";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <div className=" mt-[125px] ipadMini:min-h-[628px] ">
      <Background
        src="/BgOurGallary.png"
        alt="BgOurGallary"
        width={1440}
        height={628}
        classNameImg="  min-h-[628px] object-cover w-auto overflow-hidden hidden  ipadMini:block"
      >
        <div className=" container flex flex-col  py-[100px] ipadMini:pt-0 pb-[154.5px]">
          <div className="flex flex-col items-center text-center ipadMini:pt-[170px]  ">
            <Title title="Watch the video tour" className="text-white" />
            <Description
              className="max-w-[555px] mt-[20px] text-center"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            />
          </div>
          <div className="mx-auto w-[160px] h-[160px] mt-8 ">
            <Image
              className="w-full  object-contain"
              src="/PlayBottomHeader.png"
              alt="PlayBottomHeader"
              width={160}
              height={160}
            />
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Video;
