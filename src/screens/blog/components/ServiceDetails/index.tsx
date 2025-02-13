import React from "react";
import Information from "./components/Information";
import { Categories, Images, Posts, Tags } from "./constants";
import SearchInput from "./components/SearchInput";
import RecentPosts from "./components/RecentPosts";
import Category from "./components/Category";
import CloudTags from "./components/CloudTags";
import Social from "./components/Social";
import Card from "./components/Card";
import PageIndexButton from "./components/PageIndexButton";
interface ServiceDetailsProps {
  totalPage: number;
  data: [
    {
      img: string;
      alt: string;
      title: string;
      description: string;
    }
  ];
}
const ServiceDetails = ({ totalPage, data }: ServiceDetailsProps) => {
  return (
    <div className="container flex flex-col ipadMini:flex-row mt-[107px] mb-[75px] gap-x-[62px] px-5 ipadMini:px-0 tablet:items-center ipadMini:items-start">
      <div>
        <div className="flex flex-col gap-y-[131px]">
          {data.map((item, index) => {
            const { title, img, description } = item;
            return (
              <Information
                key={index}
                title={title}
                src={img}
                alt={img}
                subTitle={description}
              />
            );
          })}
        </div>
        <div className="ipadMini:mt-[58px] mt-[10px] ipadMini:ml-[465px] ml-[43px] w-[175px] h-[85px]">
          <PageIndexButton totalPage={totalPage} />
        </div>
      </div>
      <div className="flex flex-col gap-y-[87px]">
        <SearchInput />
        <Card title="Recent Posts" titleClassName="mt-[47px] ml-[46px]">
          <div className="flex flex-col gap-y-[25px] mt-[30px] mb-[64px] ml-[46px] ">
            {Posts.map((post, index) => (
              <RecentPosts key={index} {...post} />
            ))}
          </div>
        </Card>
        <div>
          <Card title="Categories" titleClassName="ml-[46px] mt-[54px]">
            <div className="mt-[21px] ml-[46px] mb-[51px] flex flex-col gap-y-[5px]">
              {Categories.map((category, index) => (
                <Category key={index} {...category} />
              ))}
            </div>
          </Card>
        </div>
        <div className="flex flex-col border rounded-[25px]  border-transparent shadow-2xl ">
          <Card title="Cloud Tags" titleClassName="ml-[45px] mt-[52px]">
            <div className="grid grid-cols-3 grid-rows-3  justify-between ml-[41px] pr-[37px] mt-6 gap-y-[19px] mb-[57px]">
              {Tags.map((tag, index) => (
                <CloudTags key={index} {...tag} />
              ))}
            </div>
          </Card>
        </div>
        <div>
          <Card title=" Social Connect" titleClassName="mt-[50px] ml-[46px]">
            <div className="flex mt-[28px] ml-[35px] mr-[66px] justify-between mb-[60px]">
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
