// ./app/src/components/Checkbox/Checkbox.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
/**
 * Checkbox component
 * @param {CheckboxProps} props - The props for the checkbox component
 * @returns {JSX.Element} The checkbox component
 * @link https://aspect-ui.vercel.app/docs/components/checkbox
 * @example
 * ```tsx
 * import { Checkbox } from '@/components/aspect-ui/Checkbox'
 * <Checkbox label="Label" checked={true} onChange={(checked) => console.log(checked)} />
 * ```
 */
export const Checkbox = ({ label = "", checked, checkboxClassName = "", onChange, disabled = false, 
// variant = 'default',
labelClassName = "", className = '', ...rest }) => {
    const handleChange = (event) => {
        onChange?.(event.target.checked);
    };
    return (_jsxs("label", { className: cn("flex gap-2 cursor-pointer items-center", disabled ? 'cursor-not-allowed opacity-50' : '', className), children: [_jsx("input", { type: 'checkbox', checked: checked, onChange: handleChange, disabled: disabled, className: cn("accent-primary-200 dark:accent-primary-800", checkboxClassName), ...rest }), _jsx("span", { className: cn("", labelClassName), children: label })] }));
};
