import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
interface Props {
  name: string;
  active?: boolean;
  redirect: string;
  homeClassName?: string;
}
const LinkItem: FC<Props> = ({ name, active, redirect, homeClassName }) => {
  return (
    <div>
      <Link
        className={`flex flex-row items-center gap-x-1 font-medium leading-6 tracking-wide text-darkgray ${
          active ? `${homeClassName} font-semibold` : ""
        } `}
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
