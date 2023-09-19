import React from "react";

const List = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="flex flex-wrap justify-center relative">
                <div className="flex flex-col items-center w-1/2 border-b-2">
                    <div className="flex flex-row justify-between w-full items-center px-4 mt-10 border-b-2">
                        <div className="flex justify-center items-center h-16 mb-7 text-3xl">
                            공지사항
                        </div>
                        <input
                            className="w-[280] h-[40] pl-3 pr-10 mb-7 border"
                            type="text"
                            placeholder="검색어"
                        />
                    </div>

                    <div className="flex flex-col justify-center align-middle m-auto h-[700px] ">
                        <div className="mt-10 hover:bg-[#EFF0F3] cursor-pointer">
                            <p className="text-lg">
                                ffddddssssssssssssssssssssssssssssdddddd
                            </p>
                            <p className="text-xs">
                                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzsssssssz
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
