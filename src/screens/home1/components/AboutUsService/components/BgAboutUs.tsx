import Image from "next/image";

export const BgAboutUs = () => {
  return (
    <div className="absolute z-0 right-0 top-[1400px] hidden ipadMini:block ">
      <div className="">
        <Image
          src="/BackgroundBubble.png"
          alt="backgroundBubble"
          width={948.15}
          height={1028.98}
        />
      </div>
    </div>
  );
};
