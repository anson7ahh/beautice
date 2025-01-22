"use client";
import React, { useState } from "react";
import RegisterForm from "@/screens/register";
import LoginForm from "@/screens/login";
import Image from "next/image";
import { useAtom } from "jotai";
import { isOpenSignPopupAtom } from "@/stores/dialog";

const ModalUserAuth = () => {
  const [, setIsOpen] = useAtom(isOpenSignPopupAtom);
  const [openFormRegister, setOpenFormRegister] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }
  const handleOpenLogin = () => {
    setOpenFormRegister(true);
  };
  const handleCloseLogin = () => {
    setOpenFormRegister(false);
  };

  return (
    <div className="">
      <div className="bg-gray-200 absolute z-[90] top-0 left-0 w-screen h-screen opacity-50 flex items-center justify-center"></div>
      <div className="absolute bg-white top-1/2 z-[100] mobile:w-[500px] w-[90%]  left-0 mobile:top-1/2 mobile:left-1/2 transform mobile:-translate-x-1/2 -translate-y-1/2 translate-x-6 items-center justify-center">
        <div className="relative ">
          {!openFormRegister && (
            <RegisterForm
              handleOpenLogin={handleOpenLogin}
              setOpenFormRegister={setOpenFormRegister}
            />
          )}
          {openFormRegister && (
            <>
              <LoginForm handleCloseLogin={() => handleCloseLogin()} />
            </>
          )}
          <div>
            <div
              className="absolute top-[-34px] right-[6px] cursor-pointer "
              onClick={closeModal}
            >
              <Image src="/close.svg" alt="close" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalUserAuth;
