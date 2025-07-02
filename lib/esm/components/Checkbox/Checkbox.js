import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';
export const Checkbox = ({ label, checked, onChange, disabled = false, className = '', size = 'md', variant = 'default', checkedIcon, checkboxClassName = "", labelClassName = "" }) => {
    const handleChange = (event) => {
        if (!disabled) {
            onChange(event.target.checked);
        }
    };
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };
    const iconSizes = {
        sm: 12,
        md: 16,
        lg: 20
    };
    const variantClasses = {
        default: 'rounded-sm',
        rounded: 'rounded-full'
    };
    return (_jsxs("label", { className: `
        flex items-center gap-3 cursor-pointer select-none transition-all duration-200 text-text
        ${disabled
            && 'pointer-events-none opacity-50'} 
        ${className}
      `, children: [_jsxs("div", { className: "relative", children: [_jsx("input", { type: "checkbox", checked: checked, onChange: handleChange, disabled: disabled, className: "sr-only" }), _jsx("div", { className: cn(sizeClasses[size], variantClasses[variant], "transition-all duration-200 ease-in-out flex items-center justify-center border", checked
                            ? 'bg-bg-light shadow-md  border-bg-light' : "bg-transparent border-border", checkboxClassName), children: checked && (checkedIcon ? checkedIcon : _jsx(Check, { size: iconSizes[size], className: `
                transition-all duration-200 ease-in-out
              ` })) })] }), _jsx("span", { className: cn("transition-colors duration-200", labelClassName), children: label })] }));
};
