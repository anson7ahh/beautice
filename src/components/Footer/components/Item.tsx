import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  alt: string;
  name?: string;
  link: string;
}
const Item: React.FC<Props> = ({ src, alt, name, link }) => {
  return (
    <div className="flex gap-x-[13px] items-center">
      {" "}
      <Image src={src} alt={alt} width={4.28} height={7.55} />
      <Link href={link}>
        <span className="text-white mobile:text-base text-sm font-normal mobile:text-nowrap  text-wrap tracking-[0.1em] text-left  ">
          {name}
        </span>
      </Link>
    </div>
  );
};

export default Item;
