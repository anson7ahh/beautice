/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
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

const EditSchema = yup.object().shape({
  email: yup
    .string()
    .required("email has not been changed yet")
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  fullName: yup.string().required("Full name  has not been changed yet"),
  phoneNumber: yup
    .string()
    .required("Phone number has not been changed yet")
    .matches(
      /^((\+\d{1,2}(-| )?(| )\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?)?(\\d{4}(| )(\\-\\d{4})?)?)(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,4}){0,1}|(\+\d{2}(| )\(\d{3}\)(| )\d{3}(| )\d{4})$/,
      "Invalid phone number"
    ),
});
interface Response {
  message: string;
  user: {
    fullName: string;
    email: string;
    phoneNumber: string;
  };
}
interface FormData {
  email: string;
  fullName: string;
  phoneNumber: string;
}
declare module "next-auth" {
  interface Session {
    accessToken: string;
  }
}
export default function FormEditUser() {
  const { data: session, update } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: yupResolver(EditSchema),
    values: {
      fullName: session?.user?.fullName!,
      email: session?.user?.email!,
      phoneNumber: session?.user?.phoneNumber!,
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await HttpRequest.patch("/edit", data, {
        headers: {
          authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return response.data;
    },
    onSuccess: async (data: Response) => {
      toast.success(data.message);
      await update({
        user: {
          fullName: data.user.fullName,
          email: data.user.email,
          phoneNumber: data.user.phoneNumber,
        },
      });
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
    mutate(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="ipadMini:w-[500px]  shadow-4xl  px-10 py-10 mx-auto mt-10  gap-y-[17px] w-full  "
      >
        <div className="flex flex-col gap-y-[25px]">
          <Input
            labelClassName="font-bold"
            label="Full Name"
            name="fullName"
            register={register}
            type="text"
            error={errors.fullName?.message}
            className="placeholder:text-black"
          />
          <Input
            labelClassName="font-bold"
            label="Email"
            name="email"
            register={register}
            error={errors.email?.message}
            disabled
          />
          <Input
            labelClassName="font-bold"
            label="Phone number"
            name="phoneNumber"
            register={register}
            error={errors.phoneNumber?.message}
          />
        </div>
        <Button
          className="w-full disabled:bg-gray-400 disabled:cursor-not-allowed  py-3 bg-vividpink hover:bg-pink-600 transition-all duration-500 text-white rounded-xl mt-7"
          type="submit"
          disabled={!isValid || !isDirty || isPending}
        >
          {isPending ? (
            <div className="inset-0  flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-white border-opacity-30 border-t-[#ffff] rounded-full animate-spin"></div>
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </>
  );
}
