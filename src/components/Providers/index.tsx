"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import React from "react";
import { ToastContainer } from "react-toastify";
interface Props {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const Providers = ({ children }: Props) => {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="hidden mobile:block"
        />
        {children}
      </QueryClientProvider>
    </Provider>
  );
};

export default Providers;
