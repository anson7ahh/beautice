import { LinkItem } from "./types";

export const linkItems: LinkItem[] = [
  {
    name: "Home",
    redirect: "/home2",
  },
  { name: "About", active: false, redirect: "/about" },
  { name: "Service", active: false, redirect: "/service" },
  { name: "Gallery", active: false, redirect: "/gallery" },
  { name: "Blog", active: false, redirect: "/blog" },
];
