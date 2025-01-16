/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components";
import Input from "../register/components/Input";
import { ToastContainer, toast } from "react-toastify";
import HttpRequest from "@/config/httpRequest";
import { useAtom } from "jotai";
import tokenAtom from "./stores/token";
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
}
export default function LoginForm({ handleCloseLogin }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(LoginSchema),
  });
  const [token, setToken] = useAtom(tokenAtom);
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log(data);
      const response = await HttpRequest.post("/signin", data);
      console.log(response.data.message);
      toast.success(response.data.message);

      setToken(response.data.token.split(" ")[1]);
      console.log(token);
      window.location.href = "/";
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        // Xử lý lỗi không có phản hồi từ server (network hoặc lỗi khác)
        toast.error("Failed to connect to the server. Please try again.");
      }
    }
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
