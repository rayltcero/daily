import React from "react";
import { cn } from "@/utils/cn";
import { ViewAttributes } from 'react-nativescript';

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Weight = "normal" | "medium" | "bold";

interface HeadingProps extends ViewAttributes {
    content: string;
    level: Level;
    weight?: Weight;
};

export const Heading: React.FC<HeadingProps> = ({ content, level = 2, weight = 'bold', ...viewAttributes }) => {
    const { className, ...attributes } = viewAttributes;
    const localClassName = cn("my-2 text-secondary font-serif", {
        "text-4xl": level === 1,
        "text-3xl": level === 2,
        "text-2xl": level === 3,
        "text-xl": level === 4,
        "text-lg": level === 5,
        "font-normal": weight === "normal",
        "android:font-serif-medium ios:font-medium": weight === "medium",
        "font-bold": weight === "bold"
    }, className);

    return (
        <label
            className={localClassName}
            text={content}
            {...attributes}
        />
    );
};
