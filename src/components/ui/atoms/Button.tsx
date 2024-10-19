import React from "react";
import { cn } from "@/lib/utils";
import { ViewAttributes, NSVElement } from 'react-nativescript';
import { Label, CoreTypes } from '@nativescript/core';
import { fonticon } from "nativescript-fonticon";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends ViewAttributes {
    variant: ButtonVariant;
    disabled?: boolean;
    content: string;
    onTap: () => void;
    isLoading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", content, onTap, disabled = false, className, isLoading, ...viewAttributes }) => {
   const localClassName = cn("rounded-md h-11 py-2 px-3 normal-case font-medium text-base text-white", className, {
        "bg-secondary": variant === "primary",
        "opacity-75 w-full": isLoading,
        "opacity-75": disabled
   });

   const labelRef = React.useRef<NSVElement<Label>>(null);

   React.useEffect(() => {
       const label = labelRef.current?.nativeView as Label;

        if (isLoading && labelRef.current) {
            label.animate({
                rotate: 360,
                duration: 1000,
                iterations: Number.POSITIVE_INFINITY,
                curve: CoreTypes.AnimationCurve.linear
            });
        }
   }, [isLoading]);

   if (isLoading) {
       return (
            <contentView
                className={localClassName}
            >
                <label
                    ref={labelRef}
                    text={fonticon('fa-spinner')}
                    className="text-center text-white fas w-full h-full text-base align-middle mt-2"
                />
            </contentView>
       )
   }

    return (
        <button
            text={content}
            className={localClassName}
            onTap={onTap}
            isEnabled={!disabled}
            {...viewAttributes}
        />
    );
};
