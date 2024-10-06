import React from "react";
import { isIOS } from "@nativescript/core";

interface LayoutChildProps {
    children: React.ReactNode;
}

const LayoutMainContent: React.FC<LayoutChildProps> = ({ children }) => {
    return (
        <contentView
            row={0}
            rowSpan={2}
        >
            {children}
        </contentView>
    )
};
const LayoutBottomContent: React.FC<LayoutChildProps> = ({ children }) => {
    return (
        <contentView
            row={1}
            col={0}
            colSpan={5}
        >
            {children}
        </contentView>
    );
};

interface LayoutProps {
    children: React.ReactNode;
    mainContent: React.FC<LayoutChildProps>;
    bottomContent: React.FC<LayoutChildProps>;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    let mainContent: React.ReactElement | null = null;
    let bottomContent: React.ReactElement | null = null;

    React.Children.forEach(children, child => {
        if (React.isValidElement(child)) {
            if (child.type === LayoutMainContent) {
                mainContent = child;
            } else if (child.type === LayoutBottomContent) {
                bottomContent = child;
            }
        }
    });

    return (
        <gridLayout
            rows="66.666666*, 33.333333*"
            className="h-full"
            backgroundColor="#EDF2F4"
        >
            <gridLayout
                row={1}
                rows={"*, auto"}
                columns="25*, 25*, 12.5*, 12.5*, 25*"
                className='android:-mb-4 ios:-mb-9'
            >
                <svgView
                    row={0}
                    rowSpan={2}
                    col={0}
                    colSpan={ isIOS ? 3 : 2}
                    src="~/assets/shape.svg"
                    stretch="aspectFit"
                    className="-mb-4"
                />
                {bottomContent}
            </gridLayout>

            {mainContent}
        </gridLayout>
    );
};

(Layout as any).mainContent = LayoutMainContent;
(Layout as any).bottomContent = LayoutBottomContent;


