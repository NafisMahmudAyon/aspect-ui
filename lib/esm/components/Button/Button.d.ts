import React, { ReactNode } from 'react';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'link' | 'outline' | 'ghost' | 'icon' | 'withIcon' | 'default';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    children?: ReactNode;
    icon?: ReactNode;
    className?: string;
    iconClassName?: string;
    iconPosition?: 'left' | 'right';
    position?: 'bottom-right' | 'bottom-left';
}
export declare const Button: React.FC<ButtonProps>;
export {};
