"use client";
import React, { useState } from "react";
import RegisterForm from "@/screens/register";
import LoginForm from "@/screens/login";
import Image from "next/image";

const ModalUserAuth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openFormRegister, setOpenFormRegister] = useState(true);
  function openModal() {
    setIsOpen(!isOpen);
  }
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
      <button
        className="whitespace-nowrap font-medium leading-6 tracking-wide text-darkgray"
        onClick={() => openModal()}
      >
        Sign Up
      </button>
      {isOpen && (
        <>
          <div className=" bg-gray-200 absolute  top-0 left-0 w-screen h-screen  opacity-50 flex items-center justify-center"></div>
          <div className="absolute  bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   items-center justify-center">
            <div className="relative ">
              {!openFormRegister && (
                <RegisterForm
                  handleOpenLogin={handleOpenLogin}
                  setOpenFormRegister={setOpenFormRegister}
                />
              )}
              {openFormRegister && (
                <>
                  <LoginForm
                    handleCloseLogin={() => handleCloseLogin()}
                    setIsOpen={setIsOpen}
                  />
                </>
              )}
              <div>
                <div
                  className="absolute top-[-36px] right-0 cursor-pointer "
                  onClick={closeModal}
                >
                  <Image src="/close.svg" alt="close" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ModalUserAuth;
