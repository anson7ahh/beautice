import { Button } from "@/components";
import Description from "@/components/Description";
import MoreDescription from "@/components/MoreDescription";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";
interface Props {
  className: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  moreDescription?: string;
  imgClassName?: string;
  contentClassName?: string;
}
const Illustration: React.FC<Props> = ({
  className,
  src,
  alt,
  title,
  subtitle,
  description,
  moreDescription,
  imgClassName,
}) => {
  return (
    <div className={` ${className} flex flex-col  `}>
      <div className={` ${imgClassName} relative w-[80%] mx-auto `}>
        <Image className=" w-full object-contain" src={src} alt={alt} fill />
      </div>
      <div className="flex flex-col tablet:text-left text-center w-full items-center ipadMini:items-start ">
        <SubTitle subTitle={subtitle} className="mb-[9px] mt-10 tablet:mt-0" />
        <Title
          title={title}
          className="mb-[15px] desktop:max-w-[411px] max-w-full"
        />
        <Description
          description={description}
          className=" mb-[23px] max-w-full desktop:max-w-[475px] tablet:max-w-[80%] "
        />
        <MoreDescription moreDescription={moreDescription} />

        <Button
          type="button"
          className="flex items-center mt-0 mx-auto ipadMini:mx-0"
        >
          <span className="text-base font-semibold leading-6 tracking-[0.1em] text-[#091156] mr-[16px]">
            Make an Appointment
          </span>
          <Image
            className=""
            src="/VectorService.svg"
            alt="Vector"
            width={19.46}
            height={15.63}
          />
        </Button>
      </div>
    </div>
  );
};

export default Illustration;
