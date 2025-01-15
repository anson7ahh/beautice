"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./components/Input";
import { Button } from "@/components";
import Image from "next/image";

// Schema validation với Yup
const SignupSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  phoneNumber: yup
    .string()
    .matches(
      /^((\+\d{1,2}(-| )?(| )\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?)?(\\d{4}(| )(\\-\\d{4})?)?)(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,4}){0,1}|(\+\d{2}(| )\(\d{3}\)(| )\d{3}(| )\d{4})$/,
      "Invalid phone number"
    )
    .required("Phone number is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormProps {
  onButtonClick: () => void;
}

export default function RegisterForm({ onButtonClick }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };
  const [isOpenSignIn, setIsOpenSignIn] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpenSignIn(true);
  };
  const handleClose = () => {
    setIsOpenSignIn(false);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[500px]  shadow-4xl   p-[40px] mx-auto mt-[40px]  gap-y-[17px] "
    >
      {isOpenSignIn && (
        <>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4">
            <Input
              label="Full name"
              name="fullName"
              register={register}
              wrapperClassName="col-span-1"
              error={errors.fullName?.message}
            />
            <Input
              label="Phone Number"
              name="phoneNumber"
              register={register}
              type="text"
              wrapperClassName="col-span-1"
              error={errors.phoneNumber?.message}
            />
            <Input
              label="Password"
              name="password"
              register={register}
              type="password"
              wrapperClassName="col-span-1"
              error={errors.password?.message}
            />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              register={register}
              type="password"
              wrapperClassName="col-span-1"
              error={errors.confirmPassword?.message}
            />
            <Input
              label="Email"
              name="email"
              wrapperClassName="w-full col-span-2"
              register={register}
              error={errors.email?.message}
            />
          </div>
          <Button
            className="w-full py-3 bg-vividpink text-white rounded-xl mt-5"
            type="submit"
          >
            Sign in
          </Button>
          <Button
            type="button"
            className="w-full py-3 bg-transparent text-black border-2 border-vividpink rounded-xl mt-4"
            onClick={handleClose}
          >
            Already have an account?
          </Button>
        </>
      )}

      {!isOpenSignIn && (
        <>
          <div className="flex flex-col gap-y-[25px]">
            <Input
              label="Email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              label="Password"
              name="password"
              register={register}
              type="password"
              error={errors.password?.message}
            />
          </div>
          <Button
            className="w-full  py-3 bg-vividpink text-white rounded-xl mt-7"
            type="submit"
          >
            Sign Up
          </Button>
          <Button
            className="w-full py-3 bg-transparent text-black border-2 border-vividpink rounded-xl mt-4"
            onClick={handleOpen}
          >
            {`Don't have an account yet?`}
          </Button>
        </>
      )}
      <div className="absolute top-0 right-0" onClick={onButtonClick}>
        <Image src="/close.svg" alt="close" width={30} height={30} />
      </div>
    </form>
  );
}
