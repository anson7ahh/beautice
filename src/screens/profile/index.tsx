"use client";

import { useAtom } from "jotai";

// import { WithAuthTokenWrapper } from "@/hoc/auth";
import React from "react";
import authAtom from "../login/stores/authData";
import FormEditUser from "./components/FormEditUser";
import FormResetPassword from "./components/FormResetPassword";
import Image from "next/image";

import Link from "next/link";

const ProfileUser = () => {
  const [auth] = useAtom(authAtom);
  return (
    <div className="bg-gray-200 h-screen pt-10">
      <div className="container ">
        <div className="flex justify-between">
          <div className="mobile:max-w-[258px] w-[50%] ml-[-5px] ">
            <Image
              className=""
              src={"/MainLogo.png"}
              alt="logo"
              width={258}
              height={63}
            />
          </div>
          <Link href="/">
            <Image src="/House.svg" alt="House" width={30} height={30} />
          </Link>
        </div>
        <div className="text-3xl text-gray font-semibold mt-5 ">Profile</div>
        <div>
          <div className="flex items-center bg-white justify-center gap-x-10 py-10 border-1 rounded-2xl mt-5 ">
            <Image src="/User.png" alt="User" width={200} height={200} />
            <p className="text-xl ">
              Howdy,{" "}
              <span className="text-xl font-bold">{auth?.user.fullName}!</span>
            </p>
          </div>
          <div className="flex gap-x-5 mt-5">
            <div className="bg-white w-1/2">
              <FormEditUser />
            </div>
            <div className="bg-white w-1/2">
              <FormResetPassword />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
