import About from "@/screens/about/components/About";
import Banner from "@/screens/about/components/Banner";
import BusinessSlogan from "@/screens/about/components/BusinessSlogan";
import Our from "@/screens/about/components/Our";
import ProfessionalAbout from "@/screens/about/components/Professional";

export default function about() {
  return (
    <>
      <Banner />
      <About />
      <ProfessionalAbout />
      <BusinessSlogan />
      <Our />
    </>
  );
}
