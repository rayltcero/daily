import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { isAndroid } from "@nativescript/core";

interface BottomNavProps {
    items: Array<{
        icon: string;
        label: string;
        onTap: () => void;
    }>;
}

export const BottomNav: React.FC<BottomNavProps> = ({
    items,
    ...ViewBase
}) => {
    const iosShadow = "0 10 15 -3 rgb(0 0 0 / 0.15), 0 4 6 -4 rgb(0 0 0 / 0.15)";
    const androidShadow = "0 10 15 -3 rgb(0 0 0 / 0.1), 0 4 6 -4 rgb(0 0 0 / 0.1)";

    return (
        <flexboxLayout
            className="mt-auto mb-4 bg-white container px-4 py-2 mx-4 md:mx-auto rounded-lg w-full h-36"
            boxShadow={isAndroid ? androidShadow : iosShadow}
            {...ViewBase}
        >
            {items.map((item, index) => (
                <stackLayout
                    key={index}
                    onTap={item.onTap}
                    className={cn("w-1/3 text-center", {
                        "bg-slate-200 rounded-full": index === 0,
                        "bg-red-200 rounded-full": index === 1,
                        "bg-green-200 rounded-full": index === 2
                    })}
                >
                    <image
                        src={item.icon}
                        className="w-8 h-8"
                        loadMode="async"
                    />
                    <label
                        className="text-slate-900 text-xs"
                    >
                        {item.label}
                    </label>
                </stackLayout>
            ))}
        </flexboxLayout>
    );
};
