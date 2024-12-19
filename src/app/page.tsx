import AboutUsService from "@/components/AboutUsService";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import MainService from "@/components/MainService";
import Professional from "@/components/Professional";

export default function Home() {
  return (
    <>
      <Header />
      <MainService />
      <AboutUsService />
      <Professional />
      <ContactUs />
      <Footer />
    </>
  );
}
