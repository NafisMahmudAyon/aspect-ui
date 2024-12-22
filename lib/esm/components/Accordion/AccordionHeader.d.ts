import React, { ReactNode } from 'react';
interface AccordionHeaderProps {
    children: ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    iconEnabled?: boolean;
    iconPosition?: 'left' | 'right';
    iconClassName?: string;
    activeIconClassName?: string;
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
    disabled?: boolean;
    className?: string;
    labelClassName?: string;
    activeLabelClassName?: string;
    headerClassName?: string;
    activeHeaderClassName?: string;
    reset?: boolean;
    tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'button';
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export {};
