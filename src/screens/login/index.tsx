"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components";
import Input from "../register/components/Input";
import { toast } from "react-toastify";

import { useAtom } from "jotai";
// import authAtom from "./stores/authData";
// import { useMutation } from "@tanstack/react-query";
import { isOpenSignPopupAtom } from "@/stores/dialog";
import { signIn } from "next-auth/react";
import { useState } from "react";

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
  const [, setIsOpenSignPopupState] = useAtom(isOpenSignPopupAtom);

  const [isPending, setIsPending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(LoginSchema),
  });
  // const { mutate, isPending } = useMutation({
  //   mutationFn: async (data: FormData) => {
  //     const response = await HttpRequest.post("/signin", data);
  //     return response.data;
  //   },
  //   onSuccess: (data) => {
  //     setAuth({
  //       token: data.token,
  //       user: {
  //         fullName: data.fullName,
  //         email: data.email,
  //         phoneNumber: data.phoneNumber,
  //       },
  //     });

  //     setIsOpenSignPopupState(false);
  //   },
  //   onError: (error: any) => {
  //     if (error.response) {
  //       toast.error(error.response.data.message);
  //     } else {
  //       toast.error("Failed to connect to the server. Please try again.");
  //     }
  //   },
  // });

  // const onSubmit: SubmitHandler<FormData> = (data) => {
  //   mutate(data);
  // };
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsPending(true);
    const signInResult = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!signInResult?.ok || signInResult?.error) {
      return toast.error("Your sign in request failed. Please try again.");
    } else {
      setIsOpenSignPopupState(false);

      toast.success("Login Success");
    }
    setIsPending(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="ipadMini:w-[500px] w-full  shadow-4xl px-5 ipadMini:px-10 pb-[40px] mx-auto mt-[40px]  gap-y-[17px] "
      >
        <p className="text-2xl font-bold mb-6">Sign in</p>
        <div className="flex flex-col gap-y-[25px]">
          <Input
            label="Email"
            name="email"
            register={register}
            error={errors.email?.message}
            className="placeholder:text-black"
            placeholder="Email address..."
          />
          <Input
            label="Password"
            name="password"
            placeholder="Password..."
            register={register}
            type="password"
            error={errors.password?.message}
          />
        </div>

        <Button
          className="w-full py-3 disabled:bg-gray-400 bg-transparent text-white hover:bg-pink-700 transition-all duration-500 bg-vividpink rounded-xl mt-4 relative"
          type="submit"
          disabled={isPending}
        >
          {isPending ? (
            <div className="inset-0  flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-white border-opacity-30 border-t-[#ffff] rounded-full animate-spin"></div>
            </div>
          ) : (
            "Sign In"
          )}
        </Button>
        <Button
          type="button"
          disabled={isPending}
          className="w-full py-3 bg-transparent text-black  hover:text-white bg-white border border-1 border-vividpink  hover:bg-pink-700 transition-all duration-500  rounded-xl mt-4"
          onClick={handleCloseLogin}
        >
          Need to create an account?
        </Button>
      </form>
    </>
  );
}
