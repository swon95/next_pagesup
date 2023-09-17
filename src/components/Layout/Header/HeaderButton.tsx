import React from "react";
import Link from "next/link";

const TopHeaderButton = ({ mobile }: { mobile?: boolean }) => {
    return (
        <div
            className={`flex justify-between items-center w-full ${
                mobile ? "flex-col" : ""
            }`}
        >
            <ul className={`flex ${mobile ? "flex-col" : ""} mx-8 text-white`}>
                <li
                    className={`mx-4 text-center cursor-pointer ${
                        mobile ? "border-b" : ""
                    }`}
                >
                    <Link href="/list">홈</Link>
                </li>
            </ul>
            <ul className={`flex ${mobile ? "flex-col" : ""} text-white`}>
                <li
                    className={`mx-4 text-center cursor-pointer ${
                        mobile ? "border-b" : ""
                    }`}
                >
                    <Link href="/list">공지</Link>
                </li>
                <li
                    className={`mx-4 text-center cursor-pointer ${
                        mobile ? "border-b" : ""
                    }`}
                >
                    <Link href="/">알림</Link>
                </li>
                <li
                    className={`mx-6 text-center cursor-pointer ${
                        mobile ? "border-b" : ""
                    }`}
                >
                    <Link href="/">내 정보</Link>
                </li>
            </ul>
        </div>
    );
};

export default TopHeaderButton;
