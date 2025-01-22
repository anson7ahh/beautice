/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
import { isOpenSignPopupAtom } from "@/stores/dialog";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(LoginSchema),
  });
  const [, setAuth] = useAtom(authAtom);

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await HttpRequest.post("/signin", data);
      return response.data;
    },
    onSuccess: (data) => {
      setAuth({
        token: data.token,
        user: {
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber,
        },
      });

      setIsOpenSignPopupState(false);
    },
    onError: (error: any) => {
      if (error.response) {
        toast.error(error.response.data.message);
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
        className="ipadMini:w-[500px] w-full  shadow-4xl px-5 ipadMini:px-10 pb-[40px] mx-auto mt-[40px]  gap-y-[17px] "
      >
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
          className="w-full py-3 bg-transparent  text-white hover:bg-pink-700 transition-all duration-500 bg-vividpink rounded-xl mt-4"
          type="submit"
        >
          Sign In
        </Button>
        <Button
          type="button"
          className="w-full py-3 bg-transparent  text-white hover:bg-pink-700 transition-all duration-500 bg-vividpink rounded-xl mt-4"
          onClick={handleCloseLogin}
        >
          Need to create an account?
        </Button>
      </form>
    </>
  );
}
