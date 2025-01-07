import Banner from "@/screens/gallery/components/Banner";
import OurGallery from "@/screens/gallery/components/OurGallery";
import QuotaOverview from "@/screens/gallery/components/QuotaOverview";
import Video from "@/screens/gallery/components/Video";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <Banner />
      <OurGallery />
      <Video />
      <QuotaOverview />
    </div>
  );
};

export default Gallery;
