import Background from "@/components/Background";
import Description from "@/components/Description";
import Title from "@/components/Title";
import React from "react";

const CustomerSatisfactionGoal = () => {
  return (
    <div className=" mt-[128px]">
      <Background
        src="/CustomerSatisfactionGoal.png"
        alt="CustomerSatisfactionGoal"
        width={1440}
        height={529}
      >
        <div className="container flex flex-col text-center items-center pt-[180px] pb-[146px]">
          <Title
            className="text-white max-w-[500px] ml-6"
            title="Customer satisfaction is our main goal"
          />
          <Description
            className="max-w-[680px] mt-[9px]"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          />
        </div>
      </Background>
    </div>
  );
};

export default CustomerSatisfactionGoal;
