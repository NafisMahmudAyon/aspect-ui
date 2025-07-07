import React, { ReactNode } from 'react';
interface TableCaptionProps {
    children: ReactNode;
    className?: string;
    position?: 'top' | 'bottom';
}
export declare const TableCaption: React.FC<TableCaptionProps>;
export {};
