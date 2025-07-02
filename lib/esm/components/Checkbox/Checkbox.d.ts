import React from 'react';
interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'rounded';
    checkedIcon?: React.ReactNode;
    checkboxClassName?: string;
    labelClassName?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
