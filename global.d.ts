// global.d.ts
import type { Swiper as SwiperInstance } from "swiper";

declare global {
  interface Window {
    swiper: SwiperInstance;
  }
}
