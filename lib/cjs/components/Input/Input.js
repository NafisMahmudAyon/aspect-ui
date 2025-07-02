// ./app/src/components/Input/Input.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { Hide, Mail, Show } from '../Icon/Form';
import { Tooltip, TooltipAction, TooltipContent } from '../Tooltip';
export const Input = forwardRef(({ label, type = "text", error, icon = _jsx(Mail, {}), labelClassName = "", iconClassName = "", className = "", wrapperClassName = "", errorClassName = "", passwordIconClassName = "", onChange, disabled = false, ...rest }, ref) => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = () => setIsShown(!isShown);
    // Determine the input type based on the isShown state
    const inputType = type === "password" && isShown ? "text" : type;
    return (_jsxs("fieldset", { className: cn('mb-4', wrapperClassName), children: [label && (_jsx("label", { className: cn('mb-1 block text-sm font-medium text-text', disabled
                    && "opacity-50 pointer-events-none", labelClassName), children: label })), _jsxs("div", { className: 'relative', children: [icon && (_jsx("div", { className: cn("pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 text-text", disabled ? 'opacity-50 pointer-events-none' : "", error ? "text-error-500 dark:text-error-500" : "", iconClassName), children: icon })), _jsx("input", { ref: ref, type: inputType, className: cn("w-full rounded-md border placeholder:text-text-muted px-3 py-2 shadow-xs selection:bg-primary selection:text-primary-foreground focus-visible:border-border focus:outline-hidden focus:ring-2 focus:ring-border ps-11", type === 'password' && 'pe-11', error ? 'border-error-500' : 'border-border', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', disabled ? 'opacity-50 pointer-events-none' : "", className), onChange: (event) => {
                            onChange?.(event);
                        }, ...rest }), type === "password" &&
                        _jsxs(Tooltip, { children: [_jsx(TooltipAction, { className: cn("absolute inset-y-0 end-0 flex items-center me-4 cursor-pointer text-text", passwordIconClassName ? passwordIconClassName : iconClassName), children: _jsx("div", { onClick: handleClick, children: isShown ? _jsx(Show, {}) : _jsx(Hide, {}) }) }), _jsx(TooltipContent, { className: 'text-sm text-nowrap', children: isShown ? "Show Password" : "Hide Password" })] })] }), error && _jsx("p", { className: cn('mt-1 text-sm text-error-600', errorClassName), children: error })] }));
});
Input.displayName = 'Input';
