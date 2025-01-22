"use client";
import AboutUsService from "@/screens/home1/components/AboutUsService";
import ContactUs from "@/screens/home1/components/ContactUs";
import { Banner } from "@/screens/home1/components/Banner";
import MainService from "@/screens/home1/components/MainService";
import Professional from "@/screens/home1/components/Professional";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <MainService />
      <AboutUsService />
      <Professional />
      <ContactUs />
      <Footer />
    </>
  );
};
export default Home;
