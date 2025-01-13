import { Button, Header } from "@/components";
import Image from "next/image";

const Banner = () => {
  return (
    <header>
      <div className="relative">
        <div className="container relative  z-10">
          <Header
            src="/FooterLogo.png"
            homeClassName="text-white"
            className="!ipadMini:pt-[71px] "
            hambergerIconColor="#FFFFFF"
          />

          <div className=" container ipadMini:mt-[233px] mt-5 tablet:mt-[100px] flex  text-white ipadMini:gap-x-[198px] gap-x-[100px] ">
            <div className="flex flex-col text-center ipadMini:text-left  mx-auto ipadMini:text-white ipadMini:mx-0">
              <span
                className="tablet:text-5xl tablet:font-semibold tablet:leading-[60px] 
              ipadMini:mb-[13px] ipadMini:text-left max-w-[502px] tablet:pb-[13px] ipadMini:pb-0 text-2xl"
              >
                Your beauty center place
              </span>
              <span className="max-w-[501px] mobile:text-base text-xs font-medium   mobile:tracking-[0.1em] mb-1 ipadMini:text-left mobile:mb-[37px] text-[#D8DCFF]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo, massa pellentesque arcu fusce et magna consequat neque
                vitae lobortis.
              </span>
              <Button
                className="mx-auto ipadMini:mx-0 border ipadMini:border-white mobile:w-[179px] w-[130px] 
              py-[5px] text-center mobile:py-[14.5px] text-xs rounded-xl mobile:text-base font-semibold leading-6 tracking-[0.1em]  "
              >
                More Details
              </Button>
            </div>
            <div className=" ipadMini:flex items-center gap-x-[28px] hidden">
              <Image
                className=" object-contain "
                src="/PlayBottomHeader.png"
                alt="PlayBottomHeader"
                width={166}
                height={166}
              />
              <span className="text-base font-semibold leading-6 tracking-[1.6px] text-left">
                Tour Video
              </span>
            </div>
          </div>
        </div>
        <div className="absolute z-0 top-0 w-full  tablet:block max-h-[918px]">
          <Image
            className="w-full max-h-[918px]"
            src="/BackgroundSlider.png"
            alt="logo"
            width={1440}
            height={918}
          />
        </div>
      </div>
    </header>
  );
};
export default Banner;
