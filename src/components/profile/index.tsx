"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import Link from "next/link";
import { SignOut } from "./hooks/SignOut";
import { useSession } from "next-auth/react";
import { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      fullName: string;
      phoneNumber: string;
      email: string;
    } & DefaultSession["user"];
  }
}
const Profile = () => {
  const { data: session } = useSession();

  return (
    <Menu
      as="div"
      className="relative  inline-block text-left order-last ipadMini:order-none"
    >
      <MenuButton className="w-full max-w-[150px] gap-x-1.5 rounded-md  ipadMini:px-3 py-1 text-base font-medium leading-6 tracking-wide text-darkgray">
        <div>
          {session && (
            <>
              <p className="truncate mt-1">
                <span className="">Hi, </span>
                {session?.user?.fullName}
              </p>
            </>
          )}
        </div>
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-[-157px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <div className="block  text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none">
              <SignOut />
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};
export default Profile;
