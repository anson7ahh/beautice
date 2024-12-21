import React, { FC } from 'react';

type ButtonType = "button" | "submit";
interface ButtonProps {
    children: React.ReactNode;
    type?: ButtonType;
    className?: string;
}

export const Button: FC<ButtonProps> = ({
    children,
    type = "button",
    className = "",
}) => {
    return (
        <button
            type={type}
            className={`${className}`}
        >
            {children}
        </button>
    );
};

