// ./app/src/components/Toggle/ToggleButtonGroupContext.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const ToggleButtonGroupContext = createContext(undefined);
export const useToggleButtonGroup = () => {
    const context = useContext(ToggleButtonGroupContext);
    if (!context) {
        throw new Error('useToggleButtonGroup must be used within a ToggleButtonGroupProvider');
    }
    return context;
};
export const ToggleButtonGroupProvider = ({ children, type, defaultValue = type === 'single' ? '' : [], onChange, outline = false, disabled = false, size = 'medium' }) => {
    const [selectedValues, setSelectedValues] = useState(defaultValue);
    const handleChange = (value) => {
        let newValues;
        if (type === 'single') {
            newValues = value === selectedValues ? '' : value;
        }
        else {
            newValues = Array.isArray(selectedValues) ? [...selectedValues] : [];
            const index = newValues.indexOf(value);
            if (index === -1) {
                newValues.push(value);
            }
            else {
                newValues.splice(index, 1);
            }
        }
        setSelectedValues(newValues);
        onChange?.(newValues);
    };
    return (_jsx(ToggleButtonGroupContext.Provider, { value: { type, selectedValues, handleChange, outline, disabled, size }, children: children }));
};
