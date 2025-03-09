"use client";

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const hashPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hashNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const changePage = (nemPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", nemPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <div className="flex items-center p-4 justify-between text-gray-500">
      <button disabled={!hashPrev} className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => changePage(page - 1)}>
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from({ length: Math.ceil(count / ITEM_PER_PAGE) }, (_, index) => {
          const pageIndex = index + 1;
          return (
            <button key={pageIndex} className={`px-2 rounded-md ${pageIndex === page ? "bg-sSky" : ""}`} onClick={() => changePage(pageIndex)}>
              {pageIndex}
            </button>
          );
        })}
      </div>
      <button disabled={!hashNext} className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => changePage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
