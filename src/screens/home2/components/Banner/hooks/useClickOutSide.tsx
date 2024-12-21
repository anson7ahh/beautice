"use client";

import { useEffect, useRef, useState } from "react";

export const useClickOutSide = (initialIsVisible: boolean) => {
  const [isComponentVisible, setIsComponentVisible] =
    useState<boolean>(initialIsVisible);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current) {
      if (!ref.current.contains(event?.target as HTMLElement)) {
        setIsComponentVisible(false);
      } else {
        setIsComponentVisible(true);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return { ref, isComponentVisible, setIsComponentVisible };
};
