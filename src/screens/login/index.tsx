/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components";
import Input from "../register/components/Input";
import { toast } from "react-toastify";
import HttpRequest from "@/config/httpRequest";
import { useAtom } from "jotai";
import authAtom from "./stores/authData";
import { useMutation } from "@tanstack/react-query";
// Schema validation với Yup
const LoginSchema = yup.object().shape({
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
});

interface FormData {
  email: string;
  password: string;
}
interface Props {
  handleCloseLogin: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function LoginForm({ handleCloseLogin, setIsOpen }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(LoginSchema),
  });
  const [a, setAuth] = useAtom(authAtom);

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await HttpRequest.post("/signin", data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);

      console.log("token", data.token);
      setAuth({
        token: data.token,
        user: {
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber,
        },
      });

      setIsOpen(false);
    },
    onError: (error: any) => {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to connect to the server. Please try again.");
      }
    },
  });
  console.log("auth", a);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[500px]  shadow-4xl  px-10 pt-[40px] mx-auto mt-[40px]  gap-y-[17px] "
      >
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
          Sign In
        </Button>
        <Button
          type="button"
          className="w-full py-3 bg-transparent text-black border-2 mb-10 mt-4 border-vividpink rounded-xl"
          onClick={handleCloseLogin}
        >
          Need to create an account?
        </Button>
      </form>
    </>
  );
}
