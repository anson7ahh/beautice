import Description from "@/components/Description";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import React from "react";
import { AssistanceTeams } from "./constants";
import AssistanceItems from "./components/AssistanceItems";

const AssistanceTeamOverview = () => {
  return (
    <div className="container relative z-10 px-5 ipadMini:px-0">
      <div className="flex flex-col ">
        <SubTitle className="text-center" subTitle="Assistance Team" />
        <Title
          className="text-center mt-2  "
          title="Meet the pro assistance "
        />
        <Description
          className="text-center mt-[27px]"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </div>
      <div className="mt-[112px] flex flex-col  gap-y-[77px]">
        {AssistanceTeams.map((e, index) => (
          <AssistanceItems key={index} {...e} />
        ))}
      </div>
    </div>
  );
};

export default AssistanceTeamOverview;
