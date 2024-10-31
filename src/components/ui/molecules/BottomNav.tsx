import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { isAndroid, EventData, ContentView } from "@nativescript/core";
import { NSVElement } from "react-nativescript";

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

    const [selected, setSelected] = useState(0);
    const indicatorRef = useRef<NSVElement<ContentView>>(null);

    const onTapAnimation = (param): Promise<void> => {
        const { view, index } = param;
        const indicator = indicatorRef.current?.nativeView as ContentView;
        const rawWidth = indicator.getActualSize().width;

        setSelected(index);

        indicator.animate({
            translate: { x: (rawWidth * index), y: 0 },
            duration: 300,
            curve: "easeInOut",
        });

        view.animate({
            scale: { x: 0.8, y: 0.8 },
            duration: 200,
            curve: "easeIn",
        });

        return new Promise((resolve) => {
            setTimeout(() => {
                view.animate({
                    scale: { x: 1, y: 1 },
                    duration: 200,
                    curve: "easeOut",
                });

                resolve();
            }, 200);
        });
    };

    const widthClass = `w-1/${items.length}`;

    return (
        <wrapLayout
            className="bg-gray-200 mb-4 pt-4 pb-2.5 rounded-lg"
            boxShadow={isAndroid ? androidShadow : iosShadow}
            {...ViewBase}
        >
            {items.map((item, index) => (
                <contentView
                    key={index}
                    onTap={(Event: EventData) => {
                        onTapAnimation({view: Event.object, index })
                            .then(() => item.onTap());
                    }}
                    className={cn(widthClass)}
                >
                    <svgView
                        src={item.icon}
                        stretch="aspectFit"
                        className="w-8 h-8"
                    />
                </contentView>
            ))}
            {/* indicator bar bellow icons */}
            <contentView
                className={cn(["h-1 mt-1", widthClass])}
                ref={indicatorRef}
            >
                <contentView
                    className="bg-gray-900 h-full w-10 rounded-t-lg mx-auto"
                />
            </contentView>
        </wrapLayout>
    );
};
