import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  alt: string;
  name?: string;
}
const Item: React.FC<Props> = ({ src, alt, name }) => {
  return (
    <div className="flex gap-x-1 ">
      {" "}
      <Image src={src} alt={alt} width={4.28} height={7.55} />
      <Link href="#">
        <span className="text-white text-base font-normal text-nowrap  tracking-[0.1em] text-left  ">
          {name}
        </span>
      </Link>
    </div>
  );
};

export default Item;
