"use client";
import { useState } from "react";

export const useServiceFaqLogic = () => {
  const [sectionIndex, setSectionIndex] = useState<number | null>(0);
  const handClickSection = (key: number | null) => {
    if (sectionIndex === key) setSectionIndex(null);
    else setSectionIndex(key);
  };
  return { sectionIndex, handClickSection };
};
