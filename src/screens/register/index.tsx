/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./components/Input";
import { Button } from "@/components";
import { toast } from "react-toastify";
import HttpRequest from "@/config/httpRequest";
import { useMutation } from "@tanstack/react-query";

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

    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
  handleOpenLogin: () => void;
  setOpenFormRegister: Dispatch<SetStateAction<boolean>>;
}

export default function RegisterForm({
  handleOpenLogin,
  setOpenFormRegister,
}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(SignupSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await HttpRequest.post("/signup", data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);

      setOpenFormRegister(true);
    },
    onError: (error: any) => {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error("Account already exists!");
        } else {
          toast.error(
            error.response.data?.message ||
              "An error occurred. Please try again."
          );
        }
      } else {
        toast.error("Failed to connect to the server. Please try again.");
      }
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="ipadMini:w-[500px] w-full shadow-4xl ipadMini:pb-[40px] px-10 pb-5 mx-auto mt-10  gap-y-[17px] "
      >
        <p className="text-2xl font-bold mb-6">Sign up</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-4 ">
          <Input
            label="Full name"
            name="fullName"
            register={register}
            placeholder="Enter your full name..."
            wrapperClassName="col-span-1"
            error={errors.fullName?.message}
          />
          <Input
            label="Phone Number"
            name="phoneNumber"
            register={register}
            type="text"
            placeholder="Enter your phone number..."
            wrapperClassName="col-span-1"
            error={errors.phoneNumber?.message}
          />
          <Input
            label="Password"
            name="password"
            placeholder="Enter your password..."
            register={register}
            type="password"
            wrapperClassName="col-span-1"
            error={errors.password?.message}
          />
          <Input
            label="Confirm Password"
            placeholder="Confirm password..."
            name="confirmPassword"
            register={register}
            type="password"
            wrapperClassName="col-span-1"
            error={errors.confirmPassword?.message}
          />
          <Input
            label="Email"
            placeholder="Enter your email..."
            name="email"
            wrapperClassName="w-full col-span-2"
            register={register}
            error={errors.email?.message}
          />
        </div>
        <Button
          className="w-full py-3 bg-vividpink hover:bg-pink-700 transition-all duration-500 text-white rounded-xl mt-5"
          type="submit"
        >
          Sign Up
        </Button>
        <Button
          type="button"
          className="w-full py-3 bg-transparent  text-black  hover:text-white bg-white border border-1 hover:bg-pink-600 border-vividpink transition-all duration-500  rounded-xl mt-4"
          onClick={handleOpenLogin}
        >
          Already have an account?
        </Button>
      </form>
    </>
  );
}
