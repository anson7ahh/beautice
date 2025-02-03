"use client";
import React from "react";
import FormEditUser from "./components/FormEditUser";
import FormResetPassword from "./components/FormResetPassword";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const ProfileUser = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-gray-200 h-full w-full  pt-10 px-5 ipadMini:px-0 pb-5 ipadMini:pb-0">
      <div className="desktop:max-w-[1140px] ipadMini:max-w-[1100px] tablet:max-w-[980px] mobile:max-w-[600px] mx-auto ">
        <div className="flex justify-between items-center">
          <div className="mobile:max-w-[258px] ml-[-5px] ">
            <Link href="/">
              <Image
                className=""
                src={"/MainLogo.png"}
                alt="logo"
                width={258}
                height={63}
              />
            </Link>
          </div>
          <Link href="/">
            <Image src="/House.svg" alt="House" width={30} height={30} />
          </Link>
        </div>
        <div className="text-3xl text-gray font-semibold mt-5 ">Profile</div>
        <div>
          <div className="flex items-center bg-white justify-center gap-x-10 py-10 border-1 rounded-2xl mt-5 px-5 ipadMini:px-0">
            <div>
              <Image
                className="object-contain "
                src="/User.png"
                alt="User"
                width={200}
                height={200}
              />
            </div>
            <p className="text-xl  max-w-[70%]  truncate">
              Howdy,{" "}
              <span className="text-xl font-bold  ">
                {session?.user?.fullName}!
              </span>
            </p>
          </div>
          <div className="flex flex-col ipadMini:flex-row gap-y-5 gap-x-5 mt-5 ">
            <div className="bg-white ipadMini:w-1/2 w-full rounded-2xl">
              <FormEditUser />
            </div>
            <div className="bg-white ipadMini:w-1/2 w-full rounded-2xl">
              <FormResetPassword />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
