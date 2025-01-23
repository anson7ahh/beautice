"use client";

import tokenAtom from "@/screens/login/stores/authData";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export interface AuthProps {
  authToken?: string;
}

export const WithAuthTokenWrapper = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WrappedComponent: React.FC<P> = (props) => {
    // const [auth] = useAtom(tokenAtom); // Hooks used correctly inside the functional component
    const router = useRouter();
    const auth = localStorage.getItem("authData");
    const parsedAuth = auth && JSON.parse(auth);
    console.log("token===", parsedAuth);

    useEffect(() => {
      console.log("dsd", parsedAuth);

      if (!parsedAuth?.token) {
        router.push("/"); // Redirect if no token
      }
    }, [parsedAuth, router]);

    return <Component {...props} />;
  };

  return WrappedComponent;
};
