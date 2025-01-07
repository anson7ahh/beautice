import { Button } from "@/components";
import Description from "@/components/Description";
import Title from "@/components/Title";
import Image from "next/image";
import React, { FC } from "react";
interface Props {
  title: string;
  subTitle: string;
  src: string;
  alt: string;
}
const Information: FC<Props> = ({ title, subTitle, src, alt }) => {
  return (
    <div className="max-w-[730px] border bg-white  rounded-[50px] ">
      <div className="ipadMini:w-[730px] ipadMini:h-[453px] w-full">
        <Image
          className="w-full h-full object-fill "
          src={src}
          alt={alt}
          width={730}
          height={453}
        />
      </div>
      <div className="flex flex-col ipadMini:ml-[77px] ml-0 mt-[56px] px-5 ipadMini:px-0">
        <div className="flex items-center gap-x-[15px]">
          <Image src="/Folder.svg" alt="Folder" width={25} height={25} />
          <p className="text-base font-semibold leading-5 text-left text-vividpink">
            {subTitle}
          </p>
        </div>
        <Title title={title} className="mt-[18px] max-w-[612px]" />
        <Description
          className="mt-[22px] max-w-[592px]"
          description="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
        />
        <Button className="mb-[100px]  flex flex-row bg-vividpink  w-[226px] h-[58px] items-center  justify-center border rounded-[50px] text-center mt-[35px]">
          <p className="text-base font-semibold leading-6 tracking-[0.1em] text-white w-[124px]">
            Read More
          </p>
          <Image
            className=""
            src="/Arrow.svg"
            alt="Arrow"
            width={8.24}
            height={14.52}
          />
        </Button>
      </div>
    </div>
  );
};

export default Information;
