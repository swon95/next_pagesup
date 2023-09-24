import { useState, useCallback } from 'react';


interface UsePaginationProps<T> {
    data: T[]; // 페이지징할 데이터 배열
    itemsPerPage: number; // 몇개씩 보여줄건지
};
  
interface UsePaginationReturn<T> {
    currentData: () => T[]; // event -> 현재 페이지의 데이터를 반환
    nextPage: () => void; // event
    prevPage: () => void; // event
    currentPage: number; // 현재 페이지
    maxPage: number; // 최대 페이지
};

function usePagination<T>({data, itemsPerPage}: UsePaginationProps<T>): UsePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage); // 반올림

  const currentData = useCallback(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
}, [currentPage, data, itemsPerPage]);

const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
};

const prevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
};

  return { nextPage, prevPage, currentData, currentPage, maxPage };
}

export default usePagination;