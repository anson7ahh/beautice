import Banner from "@/screens/contact/components/Banner";
import ContactUs from "@/screens/contact/components/ContactUs";
import Address from "@/screens/contact/components/Address";
import React from "react";
import GetInTouch from "@/screens/contact/components/GetInTouch";

const contact = () => {
  return (
    <div>
      <Banner />
      <ContactUs />
      <Address />
      <GetInTouch />
    </div>
  );
};

export default contact;
