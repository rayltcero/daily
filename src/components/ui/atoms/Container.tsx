import React from "react";
import { cn } from "@/lib/utils";
import type { ViewBase } from "@nativescript/core";

interface ContainerProps {
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, ...viewBase }) => {
    const { className } = viewBase as ViewBase;
    const containerClasses = cn("container mx-auto px-4 flex-col", className);

    return (
        <flexboxLayout
            {...viewBase}
            className={containerClasses}
        >
            {children}
        </flexboxLayout>
    );
};
