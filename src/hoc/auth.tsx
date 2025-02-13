"use client";

import { useSession } from "next-auth/react";
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
    const { status } = useSession();
    useEffect(() => {
      if (typeof window !== "undefined") {
        if (status === "unauthenticated") {
          router.push("/");
        }
      }
    }, [router, status]);

    return <Component {...props} />;
  };

  return WrappedComponent;
};
