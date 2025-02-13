import Banner from "@/screens/blog/components/Banner";
import ServiceDetails from "@/screens/blog/components/ServiceDetails";

import axios from "axios";

interface BlogProps {
  searchParams: { page?: string }; // Đúng kiểu dữ liệu Next.js truyền vào
}

export default async function Blog({ searchParams }: BlogProps) {
  const page = Number(searchParams?.page) || 1;

  try {
    const res = await axios(
      `http://localhost:3080/auth/recordsPost?page=${encodeURIComponent(page)}`
    );
    const todos = res.data; // Giữ nguyên nếu API trả về dữ liệu đúng

    console.log("todos", todos);
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
