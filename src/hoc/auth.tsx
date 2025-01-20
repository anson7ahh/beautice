"use client";
import tokenAtom from "@/screens/login/stores/authData";
import { useAtom } from "jotai";
import { NextComponentType, NextPageContext } from "next";
import { FC, useEffect } from "react";
export interface AuthProps {
  authToken?: string;
}

export const WithAuthTokenWrapper = (
  Component: NextComponentType<NextPageContext, unknown, AuthProps>
): NextComponentType => {
  const [token] = useAtom(tokenAtom);
  const WrappedComponent: FC = (props) => {
    useEffect(() => {
      if (!token) {
      }
    }, []);
    return <Component {...props} />;
  };

  return WrappedComponent;
};
