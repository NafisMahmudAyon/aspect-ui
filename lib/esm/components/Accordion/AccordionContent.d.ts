import React, { ReactNode } from 'react';
export interface AccordionContentProps {
    children: ReactNode;
    isOpen?: boolean;
    className?: string;
}
export declare const AccordionContent: React.FC<AccordionContentProps>;
