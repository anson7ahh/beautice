import { ReactElement, SVGProps } from "react";

export const HamburgerIcon = ({
  stroke = "#1C274C",
  ...rest
}: {
  stroke?: string;
} & SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M20 7L4 7"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 12L4 12"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 17L4 17"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
