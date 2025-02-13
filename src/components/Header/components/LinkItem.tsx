"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  active?: boolean;
  redirect: string;
  homeClassName?: string;
}

const LinkItem: FC<Props> = ({ name, active, redirect, homeClassName }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        className={`flex items-center gap-x-1 font-medium leading-6 tracking-wide  ${
          pathname === redirect ? "text-darkblue" : "text-darkgray"
        } 
          ${active ? `${homeClassName} tracking-widest font-semibold` : ""}`}
        href={redirect}
      >
        {name}
        {active && (
          <Image
            src={`${
              homeClassName === "!text-darkblue"
                ? "/PlusIconAbout.svg"
                : "/PlusIcon.svg"
            }`}
            alt="PlusIcon"
            width={7}
            height={7}
          />
        )}
      </Link>
    </div>
  );
};

export default LinkItem;
