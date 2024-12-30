import { animateScroll as scroll } from "react-scroll";

const options = {
  duration: 500,
  smooth: true,
};

export const scrollToTop = () => {
  scroll.scrollToTop(options);
};
