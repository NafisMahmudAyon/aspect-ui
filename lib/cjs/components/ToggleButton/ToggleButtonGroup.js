// ./app/src/components/Toggle/ToggleButtonGroup.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { ToggleButtonGroupProvider } from './ToggleButtonGroupContext';
export const ToggleButtonGroup = ({ children, type, defaultValue, onChange, className = '', outline = false, disabled = false, ...rest }) => {
    return (_jsx(ToggleButtonGroupProvider, { type: type, defaultValue: defaultValue, onChange: onChange, outline: outline, disabled: disabled, children: _jsx("div", { className: cn('flex items-center rounded-md', outline && 'shadow-xs', className), ...rest, children: children }) }));
};
