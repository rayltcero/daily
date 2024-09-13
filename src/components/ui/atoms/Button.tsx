import React from "react";
import { cn } from "@/utils/cn";
import { ViewAttributes, StyleSheet } from 'react-nativescript';

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends ViewAttributes {
    variant: ButtonVariant;
    disabled?: boolean;
    content: string;
    onTap: () => void;
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", content, onTap, disabled = false, className, ...viewAttributes }) => {
   const localClassName = cn("rounded-md h-11 py-2 px-3 normal-case font-medium text-base", className, {
        "bg-secondary": variant === "primary",
   });

    return (
        <button
            text={content}
            className={localClassName}
            style={styles.button}
            onTap={onTap}
            {...viewAttributes}
        ></button>
    );
};

const styles = StyleSheet.create({
    button: {
        color: "#ffffff"
    },
});
