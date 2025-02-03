/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components";
import { toast } from "react-toastify";
import HttpRequest from "@/config/httpRequest";
import { useMutation } from "@tanstack/react-query";
import Input from "@/screens/register/components/Input";

import { useSession } from "next-auth/react";

const resetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
  currentPassword: yup
    .string()
    .required("Current password is required")
    .min(8, "Current password must be at least 8 characters"),
});

interface FormData {
  newPassword: string;
  currentPassword: string;
  confirmPassword: string;
}

export default function FormResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(resetPasswordSchema),
  });
  const { data: session } = useSession();

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await HttpRequest.patch("/edit-password", data, {
        headers: {
          authorization: `Bearer ${session?.accessToken}`,
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
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
        className="ipadMini:w-[500px]  shadow-4xl  px-10 py-10 mx-auto mt-10  gap-y-[17px] w-full "
      >
        <div className="flex flex-col gap-y-[25px]">
          <Input
            label="Current password"
            name="currentPassword"
            register={register}
            type="password"
            labelClassName="font-bold"
            error={errors.currentPassword?.message}
          />
          <Input
            label="New password"
            name="newPassword"
            register={register}
            type="password"
            labelClassName="font-bold"
            error={errors.newPassword?.message}
          />

          <Input
            label="Confirm password"
            name="confirmPassword"
            register={register}
            type="password"
            labelClassName="font-bold"
            error={errors.confirmPassword?.message}
          />
        </div>
        <Button
          className="w-full  py-3 bg-vividpink hover:bg-pink-600 transition-all duration-500 text-white rounded-xl mt-7"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
