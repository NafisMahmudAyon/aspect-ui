// ./app/src/components/Toggle/ToggleButton.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useToggleButtonGroup } from './ToggleButtonGroupContext';
export const ToggleButton = ({ value, children, className = '', ...rest }) => {
    const { selectedValues, handleChange, outline, disabled, size } = useToggleButtonGroup();
    const isSelected = Array.isArray(selectedValues)
        ? selectedValues.includes(value)
        : selectedValues === value;
    const getButtonStyles = () => {
        if (outline) {
            return isSelected
                ? 'border border-border bg-bg-light text-text'
                : 'border border-border bg-transparent shadow-xs hover:bg-bg-light hover:text-text-muted';
        }
        return isSelected ? 'bg-bg-light text-text' : 'bg-transparent';
    };
    const getSizeStyles = () => {
        switch (size) {
            case 'small':
                return 'h-8 px-1.5 min-w-8';
            case 'medium':
                return 'h-9 px-2 min-w-9';
            case 'large':
                return 'h-10 px-2.5 min-w-10';
        }
    };
    return (_jsx("button", { className: cn('min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md', getButtonStyles(), getSizeStyles(), outline && 'border-l-0 first:border-l', className), onClick: () => handleChange(value), disabled: disabled, ...rest, children: children }));
};
