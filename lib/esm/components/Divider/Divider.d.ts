import React, { ReactNode } from 'react';
interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    color?: string;
    variant?: 'start' | 'center' | 'end' | 'full';
    className?: string;
    borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double';
    children?: ReactNode;
}
export declare const Divider: React.FC<DividerProps>;
export {};
