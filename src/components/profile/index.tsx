import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import Link from "next/link";
import { SignOut } from "./hooks/SignOut";
import { useAtom } from "jotai";
import authAtom from "@/screens/login/stores/authData";

const Profile = () => {
  const [name] = useAtom(authAtom);
  return (
    <Menu
      as="div"
      className="relative  inline-block text-left order-last ipadMini:order-none"
    >
      <MenuButton className="w-full max-w-[150px] gap-x-1.5 rounded-md  ipadMini:px-3 py-1 text-sm font-medium text-gray-400">
        <div>
          {name && (
            <>
              <p className="truncate text-base">
                <span className="">hi,</span>
                {name.user.fullName}
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
            <SignOut />
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};
export default Profile;
