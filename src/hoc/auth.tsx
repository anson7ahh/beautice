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

    useEffect(() => {
      // Kiểm tra môi trường client trước khi sử dụng localStorage
      if (typeof window !== "undefined") {
        const auth = localStorage.getItem("authData");
        const parsedAuth = auth && JSON.parse(auth);

        if (!parsedAuth?.token) {
          router.push("/"); // Chuyển hướng nếu không có token
        }
      }
    }, [router]);

    return <Component {...props} />;
  };

  return WrappedComponent;
};
