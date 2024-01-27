import React, {FC} from "react";

interface IconButtonProps {
    children: React.ReactNode;
    onclick: () => void;
    className?: string;

}
export const IconButton: FC<IconButtonProps> = (props) => {
    const {children, onclick, className} = props;
    return (
        <button
            className={`${className}`}
            onClick={onclick}
        >
            {children}
        </button>
    );
};

