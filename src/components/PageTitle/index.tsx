import React, { FC } from "react";

interface Props {
  title: string;
  description: string;
  subtitle: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
}
const PageTitle: FC<Props> = ({
  title,
  description,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${className}`}
    >
      <span
        className={`text-base font-semibold leading-5 text-vividpink ${subtitleClassName}`}
      >
        {subtitle}
      </span>
      <span
        className={`text-4xl font-semibold leading-[45px] text-darkblue mt-[14px] ${titleClassName}`}
      >
        {title}
      </span>
      <span
        className={`text-base font-normal leading-6 tracking-[0.1em] text-darkgray mt-[23px] ${descriptionClassName}`}
      >
        {description}
      </span>
    </div>
  );
};

export default PageTitle;
