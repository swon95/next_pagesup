"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import TopHeaderButton from "@/components/Layout/Header/HeaderButton";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    };
    return (
        <nav className="relative z-10 w-full text-white bg-custom-blue">
            <div className="flex items-center mx-5 h-14 justify-between">
                <Link href="/list">
                    <Image
                        src="/images/logoBlocksmith.png"
                        width={180}
                        height={200}
                        alt="logoBlocksmith png"
                    />
                </Link>

                <div className="text-2xl sm:hidden">
                    {menu === false ? (
                        <button onClick={handleMenu}>+</button>
                    ) : (
                        <button onClick={handleMenu}>-</button>
                    )}
                </div>

                <div className="hidden sm:block flex-grow">
                    <TopHeaderButton />
                </div>
            </div>

            <div className="block sm:hidden">
                {menu === false ? null : <TopHeaderButton mobile />}
            </div>
        </nav>
    );
};

export default Header;
