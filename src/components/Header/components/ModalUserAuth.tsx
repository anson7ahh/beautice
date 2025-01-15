"use client";
import React, { useState } from "react";
import RegisterForm from "@/screens/register";

const ModalUserAuth = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="">
      <button onClick={openModal}>Sign Up</button>
      {modalIsOpen && (
        <>
          <div className=" bg-gray-200 absolute  top-0 left-0 w-full h-full  opacity-50 flex items-center justify-center"></div>
          <div className="absolute  bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   items-center justify-center">
            <RegisterForm onButtonClick={closeModal} />
          </div>
        </>
      )}
    </div>
  );
};
export default ModalUserAuth;
