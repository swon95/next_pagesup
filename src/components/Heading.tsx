// for list detail page
import React from "react";

interface HeadingProps {
    title: string;
    createdAt: Date;
}

const Heading = ({ title, createdAt }: HeadingProps) => {
    return (
        <div>
            <div className="text-2xl font-bold">{title}</div>
            <div className="text-sm mt-2 font-light text-neutral-500">
                {createdAt.toLocaleDateString()}
            </div>
        </div>
    );
};

export default Heading;
