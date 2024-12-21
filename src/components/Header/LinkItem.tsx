import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
interface Props {
  name: string;
  active?: boolean;
}
const LinkItem: FC<Props> = ({ name, active }) => {
  return (
    <li>
      <Link
        className={`flex flex-row items-center gap-x-1 font-medium leading-6 tracking-wide text-darkgray ${
          active ? "text-white font-semibold " : ""
        }`}
        href="#"
      >
        {name}
        {active && (
          <Image src="/PlusIcon.svg" alt="PlusIcon" width={7} height={7} />
        )}
      </Link>
    </li>
  );
};

export default LinkItem;
