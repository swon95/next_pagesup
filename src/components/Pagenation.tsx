import React from "react";
import usePagination from "@/hooks/usePagination";

interface PagenationsProps<T> {
    data: T[];
    itemsPerPage: number;
    render: (data: T[]) => React.ReactNode;
}

const Pagenation = <T extends {}>({
    data,
    itemsPerPage,
    render,
}: PagenationsProps<T>) => {
    const { currentData, nextPage, prevPage, currentPage, maxPage } =
        usePagination<T>({
            data,
            itemsPerPage,
        });
    return (
        <div>
            {render(currentData())}
            <div>
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                <span>
                    {currentPage} / {maxPage}
                </span>
                <button onClick={nextPage} disabled={currentPage === maxPage}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagenation;
