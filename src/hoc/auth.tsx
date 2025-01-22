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
    const [token] = useAtom(tokenAtom); // Hooks used correctly inside the functional component
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
