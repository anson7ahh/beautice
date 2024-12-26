import Professional from "@/screens/home1/components/Professional";
import React from "react";
import BgProfessional from "./components/BgProfessional";

const ProfessionalAbout = () => {
  return (
    <div className="relative mt-[136px] ">
      <div className="relative z-30">
        <Professional />
      </div>
      <div className="absolute -z-20 top-[-518px]  right-0 hidden ipadMini:block">
        <BgProfessional />
      </div>
    </div>
  );
};

export default ProfessionalAbout;
