import { Button } from "@/components";
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
  haveButton?: boolean;
  imgClassName?: string;
  contentClassName?: string;
}
const ContentWithIllustration: React.FC<Props> = ({
  className,
  src,
  alt,
  title,
  subtitle,
  description,
  moreDescription,
  haveButton,
  imgClassName,
}) => {
  return (
    <div className={` ${className}     `}>
      <div className={` ${imgClassName} relative`}>
        <Image className="mt-[26px] w-full" src={src} alt={alt} fill />
      </div>
      <div className="flex flex-col tablet:text-left ">
        <span className="text-vividpink mb-[11px] mt-10 tablet:mt-0 text-base font-semibold leading-5">
          {subtitle}
        </span>
        <span className="text-4xl font-semibold leading-[45px] text-darkblue mb-[15px] ">
          {title}
        </span>
        <span className=" text-base font-normal  tracking-widest text-darkgray mb-6">
          {description}
        </span>
        <span className=" text-base font-normal  text-darkgray tracking-widest">
          {moreDescription}
        </span>
        {haveButton && (
          <Button type="button" className="flex items-center mt-[24px]">
            <span className="text-base font-semibold leading-6 tracking-[0.1em] text-[#091156] mr-[13px]">
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
        )}
      </div>
    </div>
  );
};

export default ContentWithIllustration;
