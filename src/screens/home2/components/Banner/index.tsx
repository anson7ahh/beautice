import { Button, Header } from "@/components";
import Image from "next/image";

const Banner = () => {
  return (
    <header>
      <div className="relative">
        <div className="container relative  z-10">
          <Header />
          <div className="mt-[216px] flex text-white gap-x-[198px]">
            <div className="flex flex-col">
              <span className="text-5xl font-semibold leading-[60px] text-left max-w-[502px] pb-[13px]">
                Your beauty center place
              </span>
              <span className="max-w-[501px] text-base font-medium  tracking-[0.1em] text-left mb-[37px] text-[#D8DCFF]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo, massa pellentesque arcu fusce et magna consequat neque
                vitae lobortis.
              </span>
              <Button className=" border border-white w-[179px] text-center py-[14.5px] w rounded-xl text-base font-semibold leading-6 tracking-[0.1em]  ">
                More Details
              </Button>
            </div>
            <div className=" flex items-center gap-x-[28px]">
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
        <div className="absolute z-0 top-0">
          <Image
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
