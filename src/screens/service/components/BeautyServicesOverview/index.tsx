import ContentWithIllustration from "@/components/ContentWithIllustration";

import React from "react";
import { BeautyServices } from "./constrant";

const BeautyServicesOverview = () => {
  return (
    <div className="container flex flex-col mt-[144px] gap-y-[92px]">
      {BeautyServices.map((item, index) => (
        <ContentWithIllustration key={index} {...item} />
      ))}
    </div>
  );
};

export default BeautyServicesOverview;
