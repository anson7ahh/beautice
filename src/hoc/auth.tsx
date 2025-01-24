"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export interface AuthProps {
  authToken?: string;
}

export const WithAuthTokenWrapper = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WrappedComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const auth = localStorage.getItem("authData");
    const parsedAuth = auth && JSON.parse(auth);
    useEffect(() => {
      if (!parsedAuth?.token) {
        router.push("/");
      }
    }, [parsedAuth, router]);

    return <Component {...props} />;
  };

  return WrappedComponent;
};
