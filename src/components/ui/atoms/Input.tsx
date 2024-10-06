import React from "react";
import { cn } from "@/lib/utils";
import { ViewAttributes, StyleSheet } from 'react-nativescript';

interface InputProps extends ViewAttributes {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}

export const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className, ...props }) => {
    const handleChange = ({ value }) => onChange(value);

    return (
        <textField
            text={value}
            onTextChange={handleChange}
            hint={placeholder}
            className={cn("px-3 py-2 h-11 w-full rounded-md border-2 border-input text-base font-sans font-normal text-slate-400", className)}
            style={styles.input}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#ffffff"
    },
});
