import Banner from "@/screens/service/components/Banner";
import BeautyServicesOverview from "@/screens/service/components/BeautyServicesOverview";
import CustomerCare from "@/screens/service/components/CustomerCare";
import OurService from "@/screens/service/components/OurService";
import ServiceFaq from "@/screens/service/components/ServiceFaq";

export default function Service() {
  return (
    <>
      <Banner />
      <OurService />
      <BeautyServicesOverview />
      <CustomerCare />
      <ServiceFaq />
    </>
  );
}
