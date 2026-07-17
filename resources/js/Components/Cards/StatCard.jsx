import React from "react";

export default function StatCard({
    title,
    value,
    subtitle,
    icon: Icon,
    iconColor,
}) {
    return (
        <div
            className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            flex
            justify-between
            items-center
            hover:-translate-y-2
            hover:shadow-2xl
            duration-300
            cursor-pointer
        "
        >
            <div>

                <h3 className="text-gray-500 text-sm">

                    {title}

                </h3>

                <h2 className="text-4xl font-bold mt-2">

                    {value}

                </h2>

                <p className="text-gray-400 mt-2">

                    {subtitle}

                </p>

            </div>

            <div
                className={`${iconColor} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`}
            >
                <Icon size={38} color="white" />
            </div>
        </div>
    );
}