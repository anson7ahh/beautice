import Banner from "@/screens/blog/components/Banner";
import ServiceDetails from "@/screens/blog/components/ServiceDetails";

import axios from "axios";

interface BlogProps {
  searchParams: { page?: string };
}

export default async function Blog({ searchParams }: BlogProps) {
  const page = Number(searchParams?.page) || 1;

  try {
    const res = await axios(
      `http://localhost:3080/auth/recordsPost?page=${encodeURIComponent(page)}`
    );
    const todos = res.data;
    return (
      <div>
        <Banner />
        <ServiceDetails totalPage={todos.totalPage} data={todos.records} />
      </div>
    );
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu:", error);
    return (
      <div>
        <Banner />
        <p className="text-red-500">Không thể tải dữ liệu.</p>
      </div>
    );
  }
}
