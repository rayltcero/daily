import React from "react";
import { cn } from "@/utils/cn";
import { ViewAttributes } from 'react-nativescript';

interface FormLabelProps extends ViewAttributes {
    text: string;
};

export const FormLabel: React.FC<FormLabelProps> = ({ text, className, ...props }) => {
    return (
        <label
            text={text}
            className={cn("text-sm mb-2 font-sans android:font-semibold ios:font-medium text-secondary", className)}
            {...props}
        />
    );
};
