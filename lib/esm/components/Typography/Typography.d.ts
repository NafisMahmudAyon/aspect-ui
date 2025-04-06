import React, { HTMLAttributes } from 'react';
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'display1' | 'display2' | 'body1' | 'body2' | 'caption';
interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
    variant?: TypographyVariant;
    tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption" | "span";
    children?: React.ReactNode;
    className?: string;
}
export declare const Typography: React.FC<TypographyProps>;
export {};
