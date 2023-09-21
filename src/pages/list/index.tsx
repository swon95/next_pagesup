import React from "react";
import Container from "@/components/Container";
import useNotices from "@/hooks/useNotices";

const List = () => {
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Container>
            <div className="min-h-screen">
                <div className="flex flex-wrap justify-center relative">
                    <div className="flex flex-col items-center w-1/2 ">
                        <div className="flex flex-row justify-between w-full items-center mt-10 ">
                            <div className="flex justify-center items-center h-16 mb-7 text-3xl font-semibold">
                                공지사항
                            </div>
                            <input
                                className="w-[280] h-[40] py-3 pl-3 pr-11 mb-7 border-2 border-black"
                                type="text"
                                placeholder="검색어"
                            />
                        </div>

                        <div className="w-full border-t-2"></div>
                        <div className="flex flex-col justify-center align-middle m-auto w-full">
                            {notices.map((notice, index) => (
                                <div
                                    key={index}
                                    className="flex-grow p-6 hover:bg-[#EFF0F3] cursor-pointer"
                                >
                                    <p className="text-lg">{notice.title}</p>
                                    <p className="text-xs">{notice.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="w-full border-2"></div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default List;
