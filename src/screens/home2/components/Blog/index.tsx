import React from "react";
import { blogItems } from "./constants";
import BlogItems from "./components/BlogItems";

const Blog = () => {
  return (
    <div className=" flex flex-col desktop:mt-[550px] mt-[400px] relative">
      <div className="container flex flex-col w-full text-center ">
        <span className="text-base font-semibold leading-5  text-vividpink mb-[12px]">
          The Blog
        </span>
        <span className="text-4xl font-semibold leading-[45px] mb-[17px] text-darkblue">
          Our latest news
        </span>
        <span className=" text-base font-normal leading-6 tracking-[0.1em] text-darkgray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <div className="flex gap-x-[47px] mt-[87px] justify-center  ipadMini:px-0 flex-col tablet:flex-row mx-auto gap-y-10 ipadMini:mx-0">
        {blogItems.map((item, index) => (
          <BlogItems key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
