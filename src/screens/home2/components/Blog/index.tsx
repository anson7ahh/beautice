import React from "react";
import { blogItems } from "./constants";
import BlogItems from "./components/BlogItems";

const Blog = () => {
  return (
    <div className="container flex flex-col desktop:mt-[281px] mobile:mt-[400px] mt-[100px] relative">
      <div className="container flex flex-col w-full text-center ">
        <span className="ipadMini:text-base text-sm font-semibold leading-5  text-vividpink mb-[11px]">
          The Blog
        </span>
        <span className="ipadMini:text-4xl text-2xl font-semibold leading-[45px] mb-[18px] text-darkblue">
          Our latest news
        </span>
        <span className=" ipadMini:text-base text-sm font-normal leading-6 tracking-[0.1em] text-darkgray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <div className="flex gap-x-[50px] mt-[87px] w-full  ipadMini:px-0 flex-col tablet:flex-row mx-auto gap-y-10 ipadMini:mx-0">
        {blogItems.map((item, index) => (
          <BlogItems key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
