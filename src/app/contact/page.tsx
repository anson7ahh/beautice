"use client";
import Banner from "@/screens/contact/components/Banner";
import ContactUs from "@/screens/contact/components/ContactUs";

import React from "react";
import GetInTouch from "@/screens/contact/components/GetInTouch";
import dynamic from "next/dynamic";
const Address = dynamic(() => import("@/screens/contact/components/Address"), {
  ssr: false,
});
const Contact = () => {
  return (
    <div>
      <Banner />
      <ContactUs />
      <Address />
      <GetInTouch />
    </div>
  );
};

export default Contact;
