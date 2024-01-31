import React, {FC} from "react";

interface IconButtonProps {
    children: React.ReactNode;
    onclick: () => void;
    className?: string;

}
export const IconButton: FC<IconButtonProps> = (props) => {
    const {children, onclick, className} = props;

    const defaultStyles: string = `
        w-9
        h-9
        flex
        justify-center
        items-center
        rounded-lg
        hover:bg-gray-500
        transition-colors
        active:scale-95
    `

    return (
        <button
            className={`${className} ${defaultStyles}`}
            onClick={onclick}
        >
            {children}
        </button>
    );
};

