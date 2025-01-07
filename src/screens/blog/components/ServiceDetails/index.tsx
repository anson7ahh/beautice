import React from "react";
import Information from "./components/Information";
import { Categories, Images, Items, Posts, Tags } from "./constants";
import SearchInput from "./components/SearchInput";
import Image from "next/image";
import RecentPosts from "./components/RecentPosts";
import Category from "./components/Category";
import CloudTags from "./components/CloudTags";
import Social from "./components/Social";
import Card from "./components/Card";

const ServiceDetails = () => {
  return (
    <div className="container flex flex-col ipadMini:flex-row mt-[107px] mb-[81px] gap-x-[62px] px-5 ipadMini:px-0 tablet:items-center ipadMini:items-start">
      <div>
        <div className="flex flex-col gap-y-[131px]">
          {Items.map((item, index) => (
            <Information key={index} {...item} />
          ))}
        </div>
        <div className="ipadMini:mt-[58px] mt-[10px] ipadMini:ml-[465px] ml-[43px] w-[175px] h-[85px]">
          <Image
            src="\PageNavigation.svg"
            alt="PageNavigation"
            width={175}
            height={85}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-[87px]">
        <SearchInput />
        <Card title="Recent Posts" titleClassName="mt-[48px] ml-[47px]">
          <div className="flex flex-col gap-y-[25px] mt-[31px] mb-[64px] ml-[48px] ">
            {Posts.map((post, index) => (
              <RecentPosts key={index} {...post} />
            ))}
          </div>
        </Card>
        <div>
          <Card title="Categories" titleClassName="ml-[48px] mt-[54px]">
            <div className="mt-[20px] ml-[46px] mb-[51px] flex flex-col gap-y-[5px]">
              {Categories.map((category, index) => (
                <Category key={index} {...category} />
              ))}
            </div>
          </Card>
        </div>
        <div className="flex flex-col border rounded-[25px]  border-transparent shadow-2xl ">
          <Card title="Cloud Tags" titleClassName="ml-[48px] mt-[52px]">
            <div className="grid grid-cols-3 grid-rows-3  justify-between ml-[43px] pr-[35px] mt-6 gap-y-[19px] mb-[57px]">
              {Tags.map((tag, index) => (
                <CloudTags key={index} {...tag} />
              ))}
            </div>
          </Card>
        </div>
        <div>
          <Card title=" Social Connect" titleClassName="mt-[50px] ml-12">
            <div className="flex mt-[28px] ml-[38px] mr-[67px] justify-between mb-[60px]">
              {Images.map((image, index) => (
                <Social key={index} {...image} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
