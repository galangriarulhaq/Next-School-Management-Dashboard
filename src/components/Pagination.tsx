import { ITEM_PER_PAGE } from "@/lib/settings";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  return (
    <div className="flex items-center p-4 justify-between text-gray-500">
      <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from({ length: Math.ceil(count / ITEM_PER_PAGE) }, (_, index) => {
          const pageIndex = index + 1;
          return (
            <button key={pageIndex} className="px-2 rounded-md bg-sSky">
              {pageIndex}
            </button>
          );
        })}
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
    </div>
  );
};

export default Pagination;
