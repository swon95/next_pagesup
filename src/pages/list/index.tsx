import React from "react";
import Container from "@/components/Container";
import useNotices, { Notice } from "@/hooks/useNotices";
import usePagination from "@/hooks/usePagination";
import Loader from "@/components/Loader";

const itemsPerPage = 10;

const List: React.FC = () => {
    // const notices = [
    //     "공백포함 100자 알림 목록에서 알림 제목은 전부 노출하되 영역을 넘는 경우 다음과 같이 줄 바꿈으로 표현합니다. 알림 목록에서 알림 제목은 전부 노출하되 영역을 넘는 경우 다음과",
    //     "공지사항 2",
    //     "공지사항 3",
    //     "공지사항 4",
    //     "공지사항 5",
    //     "공지사항 6",
    //     "공지사항 7",
    //     "공지사항 8",
    //     "공지사항 9",
    //     "공지사항 10",
    // ];

    const { notices, loading, error } = useNotices();

    const { currentData, nextPage, prevPage, currentPage, maxPage } =
        usePagination<Notice>({
            data: notices,
            itemsPerPage,
        });

    if (loading) return <Loader />;
    if (error) return <p>Error: {error.message}</p>;

    const paginatedNotices = currentData();

    return (
        <Container>
            <div className="min-h-screen">
                <div className="flex flex-wrap justify-center relative">
                    <div className="flex flex-col items-center w-1/2 ">
                        <div className="flex flex-row justify-between w-full items-center mt-10 ">
                            <div className="flex justify-center items-center h-16 mb-7 text-3xl font-semibold text-[#222222]">
                                공지사항
                            </div>
                            <input
                                style={{ width: 280, height: 40 }}
                                className="py-3 pl-3 pr-11 mb-7 rounded-md border-2 border-black text-sm text-[#CBCBCB]"
                                type="text"
                                placeholder="검색어"
                            />
                        </div>
                        <div className="w-full border-t-2"></div>
                        <div className="flex flex-col justify-center align-middle m-auto w-full">
                            {notices.length === 0 ? (
                                <div className="w-full h-full flex flex-col justify-center items-center space-y-8 inline-flex px-28 py-12">
                                    <p className="text-center text-[#707070] text-lg font-normal leading-7 break-words">
                                        공지사항이 없습니다.
                                    </p>
                                </div>
                            ) : (
                                paginatedNotices.map((notice) => (
                                    <div
                                        key={notice.id}
                                        className="flex-grow p-6 hover:bg-[#EFF0F3] cursor-pointer"
                                    >
                                        <p className="text-lg text-[#222222]">
                                            {/* 글자수 제한 처리 */}
                                            {notice.title.length > 100
                                                ? `${notice.title.substring(
                                                      0,
                                                      100
                                                  )}`
                                                : notice.title}
                                        </p>
                                        <p className="text-lg text-[#707070]">
                                            {notice.content}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                        {paginatedNotices.length > 0 && (
                            <>
                                <div className="w-full border-2"></div>
                                <div>
                                    <button
                                        onClick={prevPage}
                                        disabled={currentPage === 1}
                                    >
                                        Prev
                                    </button>
                                    <span>
                                        {currentPage} / {maxPage}
                                    </span>
                                    <button
                                        onClick={nextPage}
                                        disabled={currentPage === maxPage}
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default List;
