"use client";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

interface PageIndexButtonProps {
  totalPage: number;
}

const PageIndexButton = ({ totalPage }: PageIndexButtonProps) => {
  const router = useRouter();

  const handlePageClick = (event: { selected: number }) => {
    const page = event.selected + 1;
    router.push(`?page=${page}`, { scroll: false });
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={totalPage}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};

export default PageIndexButton;
