import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { isAndroid } from "@nativescript/core";

export const Calendar: React.FC = (props) => {
    const [week, setWeek] = useState([
        { day: "Sun", date: "01" },
        { day: "Mon", date: "02" },
        { day: "Tue", date: "03" },
        { day: "Wed", date: "04" },
        { day: "Thu", date: "05" },
        { day: "Fri", date: "06" },
        { day: "Sat", date: "07" },
        { day: "Sun", date: "08" }
    ]);

    const baseClassDate = "text-center text-slate-900 text-base font-bold rounded-full m-2 w-8 h-7 p-0.5";
    const androidShadow = "0 10 15 -3 rgb(0 0 0 / 0.1), 0 4 6 -4 rgb(0 0 0 / 0.1)";
    const iosShadow = "0 10 15 -3 rgb(0 0 0 / 0.2), 0 4 6 -4 rgb(0 0 0 / 0.2)";

    return (
        <scrollView
            orientation="horizontal"
            scrollBarIndicatorVisible={false}
            {...props}
        >
            <flexboxLayout
                className="py-2"
            >
                {week.map((day, index) => (
                    <flexboxLayout
                        key={index}
                        className={cn("mr-2 flex-col shrink grow w-11 h-20 justify-center", {
                            "ml-2": index === 0,
                            "mr-4": index === week.length - 1,
                            "bg-slate-200 rounded-full": index === 3
                        })}
                        boxShadow={`${index === 3 ? isAndroid ? androidShadow : iosShadow : ""}`}
                    >
                        <label
                            className="text-center text-slate-500 text-sm"
                        >
                            {day.day}
                        </label>
                        <label
                            className={cn(baseClassDate, {
                                "bg-white": index === 3
                            })}
                            verticalAlignment="middle"
                        >
                            {day.date}
                        </label>
                    </flexboxLayout>
                ))}
            </flexboxLayout>
        </scrollView>
    );
}
