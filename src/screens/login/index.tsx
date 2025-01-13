"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "@/components";
import Input from "../register/components/Input";
// Import the Input component

// Cập nhật schema validation
const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .required("email is required")
    .email()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email"
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

export default function RegisterForm() {
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[500px] bg-red-300 p-[40px] mx-auto mt-[200px]  flex flex-col gap-y-[20px]"
    >
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

      <Button className="" type="submit">
        <span>Send </span>
      </Button>
    </form>
  );
}
