import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
}
const Icon: React.FC<Props> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={25} height={27.84} />;
};

export default Icon;
