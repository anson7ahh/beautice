import { ProfessionalItems } from "./components";
import React from "react";

interface Item {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  name: string;
}
const Items: Item[] = [
  {
    id: 1,
    imgSrc: "/professionalSurgeon.png",
    title: "Briyan Nevalli",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    name: "Surgeon",
  },
  {
    id: 2,
    imgSrc: "/professionalBella.png",
    title: "Bella sebastian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    name: "Dermatologist",
  },
  {
    id: 3,
    imgSrc: "/professionalLilly.png",
    title: "Lilly Adams",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    name: "Stylist expert",
  },
];
const Professional = () => {
  return (
    <div>
      <div className="container  text-center max-w-[1085px] mx-auto mt-[90.2px] px-5 ipadMini:px-0 ">
        <div className="flex text-center items-center flex-col">
          <p className="text-[#FF64AE] text-base font-semibold leading-5 mb-4">
            Professional Teams
          </p>
          <p className="text-[#091156] text-4xl font-semibold leading-[45px] mb-5">
            The Professional expert
          </p>
          <p className="h-[51px] font-normal text-base leading-6 tracking-[1.6px] text-[#8B8B8B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
        <div className="relative z-30 mt-[87px] gap-x-14 justify-center items-start mb-[134.4px] flex flex-col ipadMini:flex-row">
          {Items.map((item) => (
            <ProfessionalItems
              key={item.id}
              name={item.name}
              description={item.description}
              id={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professional;
