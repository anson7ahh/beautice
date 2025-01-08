import Background from "@/components/Background";
import Image from "next/image";
import React from "react";

const CustomerCare = () => {
  return (
    <div className=" mt-[130px]">
      <Background
        src="/bgCustomerCare.png"
        alt="bgCustomerCare"
        width={1440}
        height={529}
        overlay={
          <Image
            className="w-full max-h-[529px] "
            src="/BackgroundMask.png"
            alt="BackgroundMask"
            width={1440}
            height={529}
          />
        }
      >
        <div className="container px-5 ipadMini:px-0 flex flex-col ipadMini:flex-row ipadMini:pl-[62px] desktop:pl-0 ipadMini:pt-[180px] py-20 ipadMini:py-0 items-center gap-x-[123px]">
          <div className="flex flex-col text-left ">
            <span className="text-4xl font-semibold leading-[45px] text-white max-w-[600px]">
              Best responsibility and service for our customers
            </span>
            <span className="text-base font-normal leading-6 tracking-[0.1em] text-darkgray max-w-[555px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </span>
          </div>
          <div className="hidden ipadMini:block">
            <Image
              className="ipadMini:w-full "
              src="/PlayButtonTreatmen.svg"
              alt="PlayButtonTreatmen"
              width={360}
              height={170}
            />
          </div>
        </div>
      </Background>
    </div>
  );
};

export default CustomerCare;
