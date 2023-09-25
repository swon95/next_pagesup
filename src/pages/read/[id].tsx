// pages/read/[id].tsx
import React from "react";
import Container from "@/components/Container";
import { GetServerSideProps } from "next";
import useDetail from "@/hooks/useDetail";

interface DetailProps {
    id: number;
}

const DetailComponent: React.FC<DetailProps> = ({ id }) => {
    const { notice, error, loading } = useDetail(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!notice) return <p>No notice found!</p>;

    return (
        <Container>
            <div className="min-h-screen">
                <div className="flex flex-wrap justify-center relative">
                    <div className="flex flex-col items-center w-1/2 ">
                        <div className="flex flex-row justify-between w-full items-center mt-10 ">
                            <div className="pb-6 text-[#222222] text-base font-semibold leading-[16px] break-words font-pretendard">
                                공지사항
                            </div>
                        </div>
                        <div className="w-full text-[#222222] text-[32px] font-semibold leading-[39.04px] break-words font-pretendard">
                            {notice.title}
                        </div>
                        <div className="flex flex-col justify-center align-middle m-auto w-full pt-4 pb-8">
                            <p className="text-lg text-[#707070]">시간</p>
                        </div>

                        <div className="w-full border-t-2"></div>

                        <div>
                            <p className="text-lg text-[#707070]">
                                {notice.content}
                            </p>
                        </div>

                        <div className="w-full border-t-2"></div>
                        <div className="w-full h-full flex flex-start items-start space-x-4 pt-4">
                            <div className="h-full py-2 px-3 bg-white rounded-md border border-[#DEDEDE] inline-flex justify-center items-center space-x-2">
                                <div className="text-center text-[#222222] text-base font-medium leading-4 break-words font-pretendard">
                                    목록으로
                                </div>
                            </div>
                            <div className="w-13 pl-3 pr-3 pt-2 pb-2 bg-[#FF5C00] rounded-md flex justify-center items-center space-x-2">
                                <div className="text-center text-white text-lg font-medium leading-4 break-words font-pretendard">
                                    수정
                                </div>
                            </div>
                            <div className="w-13 pl-3 pr-3 pt-2 pb-2 bg-red-600 rounded-md flex justify-center items-center space-x-2">
                                <div className="text-center text-white text-lg font-medium leading-4 break-words font-pretendard">
                                    삭제
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps<DetailProps> = async (
    context
) => {
    const id = Number(context.params?.id);

    return {
        props: { id },
    };
};

export default DetailComponent;
