"use client";

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Image from "next/image";
import { Datas } from "../constants";

const Slider: React.FC = () => {
  return (
    <div className="container mt-[176px] px-5 ipadMini:px-0">
      <Swiper
        navigation
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="swiperCustom"
      >
        {Datas.map(({ id }) => (
          <SwiperSlide key={id}>
            <div className="flex flex-col items-center text-center">
              <SubTitle subTitle="Our Testimonials" />
              <Title className="mt-[12px]" title="What our customer says" />
              <Description
                className="mt-[21px]"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
              />
              <Image
                className="mt-[66px]"
                src="/ImgOurTestimonials.png"
                alt="ImgOurTestimonials"
                width={73}
                height={73}
              />
            </div>
            <p className="text-center max-w-[544px] mx-auto mt-[43px] font-poppins text-sm font-normal leading-[21px] tracking-[0.1em] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              metus tincidunt laoreet ultricies condimentum ac integer aliquam.
              Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem
              elementum morbi imperdiet suscipit erat ut. Purus volutpat in
              turpis gravida blandit.
            </p>
            <Image
              className="min-w-[169px] mx-auto mt-[33px] pb-[120px]"
              src="/Star.svg"
              alt="Star"
              height={169}
              width={25}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
