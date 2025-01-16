import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div>
      <Image
        src="/ProfileButton.svg"
        alt="ProfileButton"
        width={30}
        height={30}
      />
    </div>
  );
};

export default Profile;
