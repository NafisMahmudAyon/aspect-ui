import React, { ReactNode } from 'react';
interface AccordionContextType {
    openItems: string[];
    toggleItem: (itemId: string) => void;
    iconEnabled: boolean;
    iconPosition: 'left' | 'right';
    iconClassName: string;
    activeIconClassName: string;
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
    labelClassName?: string;
    activeLabelClassName?: string;
    headerClassName?: string;
    activeHeaderClassName?: string;
    contentClassName?: string;
}
export declare const AccordionProvider: React.FC<{
    children: React.ReactNode;
    value: AccordionContextType;
}>;
export declare const useAccordion: () => AccordionContextType;
export {};
