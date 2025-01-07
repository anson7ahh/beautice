import React, { FC } from "react";
interface Props {
  title: string;
}
const CloudTags: FC<Props> = ({ title }) => {
  return (
    <div className="w-[82px]  shadow-custom rounded-[50px] h-[26px] text-center">
      <p className="text-sm font-normal leading-[21px] tracking-[0.1em] text-darkgray  ">
        {title}
      </p>
    </div>
  );
};

export default CloudTags;
