/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components";
import { toast } from "react-toastify";
import HttpRequest from "@/config/httpRequest";
import { useAtom } from "jotai";
import { useMutation } from "@tanstack/react-query";
import Input from "@/screens/register/components/Input";
import authAtom from "@/screens/login/stores/authData";

const EditSchema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .required("Email is required")
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  fullName: yup.string().nullable().required("Full name is required"),
  phoneNumber: yup
    .string()
    .nullable()
    .required("Phone number is required")
    .matches(
      /^((\+\d{1,2}(-| )?(| )\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?)?(\\d{4}(| )(\\-\\d{4})?)?)(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,4}){0,1}|(\+\d{2}(| )\(\d{3}\)(| )\d{3}(| )\d{4})$/,
      "Invalid phone number"
    ),
});

interface FormData {
  email: string;
  fullName: string;
  phoneNumber: string;
}

export default function FormEditUser() {
  const [data] = useAtom(authAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(EditSchema),
  });
  const [auth] = useAtom(authAtom);
  // console.log(auth?.token);
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await HttpRequest.post("/edit", data, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });
      console.log(response.data);
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
        className="w-[500px]  shadow-4xl  px-10 py-10 mx-auto mt-10  gap-y-[17px]  "
      >
        <div className="flex flex-col gap-y-[25px]">
          <Input
            labelClassName="font-bold"
            label="Full Name"
            name="fullName"
            defaultValue={data?.user.fullName}
            register={register}
            type="text"
            error={errors.fullName?.message}
          />
          <Input
            labelClassName="font-bold"
            label="Email"
            name="email"
            defaultValue={data?.user.email}
            register={register}
            error={errors.email?.message}
          />
          <Input
            labelClassName="font-bold"
            label="Phone number"
            name="phoneNumber"
            defaultValue={data?.user.phoneNumber}
            register={register}
            error={errors.phoneNumber?.message}
          />
        </div>
        <Button
          className="w-full  py-3 bg-vividpink text-white rounded-xl mt-7"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
