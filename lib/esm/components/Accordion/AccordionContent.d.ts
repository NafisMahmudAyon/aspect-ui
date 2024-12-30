import React, { ReactNode } from 'react';
interface AccordionContentProps {
    children: ReactNode;
    isOpen?: boolean;
    className?: string;
    reset?: boolean;
}
export declare const AccordionContent: React.FC<AccordionContentProps>;
export {};
