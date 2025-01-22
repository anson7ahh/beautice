"use client";

import { WithAuthTokenWrapper } from "@/hoc/auth";
import ProfileUser from "@/screens/profile";

const Profile = () => {
  return <ProfileUser />;
};

export default WithAuthTokenWrapper(Profile);
