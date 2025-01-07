import AssistanceTeamOverview from "@/screens/team/components/AssistanceTeamOverview";
import Banner from "@/screens/team/components/Banner";
import CustomerSatisfactionGoal from "@/screens/team/components/CustomerSatisfactionGoal";
import OurTeam from "@/screens/team/components/OurTeam";
import Testimonials from "@/screens/team/components/Testimonials";

import React from "react";

const Team = () => {
  return (
    <div>
      <Banner />
      <OurTeam />
      <AssistanceTeamOverview />
      <CustomerSatisfactionGoal />
      <Testimonials />
    </div>
  );
};

export default Team;
