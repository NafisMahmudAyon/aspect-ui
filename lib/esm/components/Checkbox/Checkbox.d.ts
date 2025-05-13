import React from 'react';
interface CheckboxProps {
    label: string;
    checked: boolean;
    checkboxClassName?: string;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
