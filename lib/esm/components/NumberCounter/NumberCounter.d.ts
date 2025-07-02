import React from 'react';
interface NumberCounterProps {
    end: number;
    duration?: number;
    decimals?: number;
    onVisible?: boolean;
    repeatOnVisible?: boolean;
    className?: string;
}
export declare const NumberCounter: React.FC<NumberCounterProps>;
export {};
