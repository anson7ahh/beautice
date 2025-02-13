"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface PageIndexButtonProps {
  totalPage: number;
}

const PageIndexButton = ({ totalPage }: PageIndexButtonProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1; // Chuyển về số

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`, { scroll: false }); // Không cuộn lên đầu trang
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm gap-2">
        {Array.from({ length: totalPage }, (_, i) => (
          <li key={i + 1}>
            <button
              onClick={() => handlePageChange(i + 1)}
              className={`flex items-center rounded-full justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 
                ${
                  currentPage === i + 1
                    ? "bg-darkblue text-white"
                    : "bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageIndexButton;
