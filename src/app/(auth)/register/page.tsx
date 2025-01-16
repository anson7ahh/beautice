"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModalUserAuth from "@/components/Header/components/ModalUserAuth";
// import ExampleComponent from "@/screens/register/api/useLoginApi";
import { Provider, useAtom } from "jotai";
import tokenAtom from "@/screens/login/stores/token";
import Profile from "@/app/(user)/profile";

const Register = () => {
  const [token] = useAtom(tokenAtom);
  const queryClient = new QueryClient();
  return (
    <>
      <Provider>
        <QueryClientProvider client={queryClient}>
          {token ? <Profile /> : <ModalUserAuth />}
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default Register;
