// ./app/src/components/Input/Input.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { Hide, Mail, Show } from '../Icon/Form';
import { cn } from '../../utils/cn';
import { Tooltip, TooltipAction, TooltipContent } from '../Tooltip';
export const Input = forwardRef(({ label, type = "text", error, icon = _jsx(Mail, {}), labelClassName = "", iconClassName = "", className = "", wrapperClassName = "", errorClassName = "", passwordIconClassName = "", onChange, ...rest }, ref) => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = () => setIsShown(!isShown);
    // Determine the input type based on the isShown state
    const inputType = type === "password" && isShown ? "text" : type;
    return (_jsxs("fieldset", { className: cn('mb-4', wrapperClassName), children: [label && (_jsx("label", { className: cn('mb-1 block text-sm font-medium text-secondary-800 dark:text-secondary-200', labelClassName), children: label })), _jsxs("div", { className: 'relative', children: [icon && (_jsx("div", { className: cn("pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 text-primary-800 dark:text-primary-200 peer-disabled:pointer-events-none peer-disabled:opacity-50", error ? "text-error-500 dark:text-error-500" : "", iconClassName), children: icon })), _jsx("input", { ref: ref, type: inputType, className: cn("w-full rounded-md border bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 placeholder:text-secondary-500 px-3 py-2 shadow-sm focus-visible:border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-200 ps-11", type === 'password' && 'pe-11', error ? 'border-error-500' : 'border-gray-300', className), onChange: (event) => {
                            onChange?.(event);
                        }, ...rest }), type === "password" &&
                        _jsxs(Tooltip, { className: cn("absolute inset-y-0 end-0 flex items-center pe-4 cursor-pointer text-primary-800 dark:text-primary-200", passwordIconClassName ? passwordIconClassName : iconClassName), contentClassName: 'text-sm text-nowrap', arrowColor: '#847ef3', children: [_jsx(TooltipAction, { children: _jsx("div", { onClick: handleClick, children: isShown ? _jsx(Show, {}) : _jsx(Hide, {}) }) }), _jsx(TooltipContent, { children: isShown ? "Show Password" : "Hide Password" })] })] }), error && _jsx("p", { className: cn('mt-1 text-sm text-error-600', errorClassName), children: error })] }));
});
Input.displayName = 'Input';
