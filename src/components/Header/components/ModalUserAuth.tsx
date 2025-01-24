"use client";
import React, { useState, useRef, useEffect } from "react";
import RegisterForm from "@/screens/register";
import LoginForm from "@/screens/login";
import Image from "next/image";
import { useAtom } from "jotai";
import { isOpenSignPopupAtom } from "@/stores/dialog";

const ModalUserAuth = () => {
  const [, setIsOpen] = useAtom(isOpenSignPopupAtom);
  const ref = useRef<HTMLDivElement | null>(null);
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
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current) {
      if (!ref.current.contains(event?.target as HTMLElement)) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="absolute bg-black opacity-65 z-[90] top-0 left-0 w-full h-full flex items-center justify-center"></div>
      <div
        ref={ref}
        className="absolute bg-white top-1/2 shadow-4xl rounded-lg z-[100] mobile:w-[500px] w-[90%]  left-0 mobile:top-1/2 
      mobile:left-1/2 transform mobile:-translate-x-1/2 -translate-y-1/2 translate-x-6 items-center justify-center"
      >
        <div className=" ">
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
              className="absolute top-4 right-[12px] cursor-pointer "
              onClick={closeModal}
            >
              <Image src="/close.svg" alt="close" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalUserAuth;
