"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./components/Input";
import { Button } from "@/components";
// Import the Input component

// Cập nhật schema validation
const SignupSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  age: yup
    .number()
    .required()
    .positive()
    .integer()
    .typeError("Age must be a positive number"),
  phoneNumber: yup
    .string()
    .matches(/^(?:\+84|0)(?:\d{9}|\d{8})$/, "Invalid phone number")
    .required("Phone number is required"),
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
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
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
        label="First Name"
        name="firstName"
        register={register}
        error={errors.firstName?.message}
      />
      <Input
        label="Last Name"
        name="lastName"
        register={register}
        error={errors.lastName?.message}
      />
      <Input
        label="Age"
        name="age"
        register={register}
        type="number"
        error={errors.age?.message}
      />
      <Input
        label="Email"
        name="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        label="Phone Number"
        name="phoneNumber"
        register={register}
        type="text"
        error={errors.phoneNumber?.message}
      />
      <Input
        label="Password"
        name="password"
        register={register}
        type="password"
        error={errors.password?.message}
      />
      <Input
        label="Confirm Password"
        name="confirmPassword"
        register={register}
        type="password"
        error={errors.confirmPassword?.message}
      />
      <Button className="" type="submit">
        <span>Send </span>
      </Button>
    </form>
  );
}
