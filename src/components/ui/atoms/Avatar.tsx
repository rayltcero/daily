import React from "react";
import { cn } from "@/lib/utils";
import { ViewAttributes, NSVElement } from 'react-nativescript';

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps extends ViewAttributes {
    size?: AvatarSize;
}

export const Avatar: React.FC<AvatarProps> = ({ size = "md", className, ...viewAttributes }) => {
    const localClassName = cn("rounded-full", className, {
        "h-10 w-10": size === "sm",
        "h-12 w-12": size === "md",
        "h-16 w-16": size === "lg"
    });

    return (
        <ncImage
            className={localClassName}
            roundAsCircle={true}
            aspectRatio={1}
            stretch="aspectFit"
            verticalAlignment="top"
            {...viewAttributes}
        />
    );
}
