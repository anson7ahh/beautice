import React from "react";
import { BeautyServices } from "./constrant";
import Illustration from "./components/Illustration";

const BeautyServicesOverview = () => {
  return (
    <div className="container flex flex-col mt-[169px] px-5  tablet:px-0 gap-y-[120px] gap-x-[187px]">
      {BeautyServices.map((item, index) => (
        <Illustration key={index} {...item} />
      ))}
    </div>
  );
};

export default BeautyServicesOverview;
