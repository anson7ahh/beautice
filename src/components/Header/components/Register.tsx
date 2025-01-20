"use client";
import ModalUserAuth from "@/components/Header/components/ModalUserAuth";
import { useAtom } from "jotai";

import Profile from "@/components/profile";
import authAtom from "@/screens/login/stores/authData";

const Register = () => {
  const [token] = useAtom(authAtom);
  console.log("token ", token?.token);

  return token ? <Profile /> : <ModalUserAuth />;
};

export default Register;
