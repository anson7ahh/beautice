import Image from "next/image";

import { linkItems } from "./constants";
import LinkItem from "./LinkItem";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="  relative z-30 pt-[40px] flex gap-x-[350px]">
      <div className="items-center">
        <Image src="/MainLogo.png" alt="logo" width={258} height={63} />
      </div>
      <nav className="flex text-darkgray text-lef">
        <ul className="flex items-center gap-x-10  text-base font-semibold">
          {linkItems.map((item, index) => {
            return <LinkItem key={index} {...item} />;
          })}
          <li className="bg-pinkish px-[41px] py-[14px] text-center rounded-[50px]">
            <Link className="text-white " href="#">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
