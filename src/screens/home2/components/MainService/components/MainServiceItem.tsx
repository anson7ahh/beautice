import { Button } from "@/components";
import Image from "next/image";
import React, { FC } from "react";
interface Prop {
  src: string;
  title: string;
  alt: string;
  description: string;
}
const MainServiceItem: FC<Prop> = ({ src, alt, description, title }) => {
  return (
    <div>
      <Image src={src} alt={alt} width={64} height={64} />
      <span>{title}</span>
      <span>{description}</span>
      <Button>
        Learn more
        <Image
          src="/angle-double-right.svg"
          alt="angle-double-right"
          height={17}
          width={16}
        />
      </Button>
    </div>
  );
};

export default MainServiceItem;
