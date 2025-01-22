"use client";

import tokenAtom from "@/screens/login/stores/authData";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { NextComponentType, NextPageContext } from "next";

export interface AuthProps {
  authToken?: string;
}

export const WithAuthTokenWrapper = (
  Component: NextComponentType<NextPageContext, unknown, AuthProps>
): FC<AuthProps> => {
  const WrappedComponent: FC<AuthProps> = (props) => {
    const [token] = useAtom(tokenAtom); // Hooks are now inside the functional component
    const router = useRouter();

    useEffect(() => {
      if (!token) {
        router.push("/"); // Redirect if no token
      }
    }, [token, router]);

    if (!token) {
      return null; // Optionally show a loading state while redirecting
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};
