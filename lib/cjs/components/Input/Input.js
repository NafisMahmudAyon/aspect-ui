'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { Tooltip, TooltipAction, TooltipContent } from '../Tooltip';
import { Eye, EyeOff, Mail } from 'lucide-react';
export const Input = forwardRef(({ label, type = 'text', error, icon = _jsx(Mail, {}), labelClassName = '', iconClassName = '', className = '', wrapperClassName = '', errorClassName = '', passwordIconClassName = '', onChange, disabled = false, ...rest }, ref) => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = () => setIsShown(!isShown);
    const inputType = type === 'password' && isShown ? 'text' : type;
    return (_jsxs("fieldset", { className: cn('mb-4', wrapperClassName), children: [label && (_jsx("label", { className: cn('text-text mb-1 block text-sm font-medium', disabled && 'pointer-events-none opacity-50', labelClassName), children: label })), _jsxs("div", { className: 'relative', children: [icon && (_jsx("div", { className: cn('text-text pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4', disabled ? 'pointer-events-none opacity-50' : '', error ? 'text-error-foreground' : '', iconClassName), children: icon })), _jsx("input", { ref: ref, type: inputType, className: cn('placeholder:text-text-muted selection:bg-primary selection:text-primary-foreground focus-visible:border-border focus:ring-border w-full rounded-md border px-3 py-2 ps-11 shadow-xs focus:ring-2 focus:outline-hidden', type === 'password' && 'pe-11', error ? 'border-error-foreground' : 'border-border', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', disabled ? 'pointer-events-none opacity-50' : '', className), onChange: event => {
                            onChange?.(event);
                        }, ...rest }), type === 'password' && (_jsxs(Tooltip, { children: [_jsx(TooltipAction, { className: cn('text-text absolute inset-y-0 end-0 me-4 flex cursor-pointer items-center', passwordIconClassName ? passwordIconClassName : iconClassName), children: _jsx("div", { onClick: handleClick, children: isShown ? _jsx(Eye, {}) : _jsx(EyeOff, {}) }) }), _jsx(TooltipContent, { className: 'text-sm text-nowrap', children: isShown ? 'Show Password' : 'Hide Password' })] }))] }), error && (_jsx("p", { className: cn('text-error-foreground mt-1 text-sm', errorClassName), children: error }))] }));
});
Input.displayName = 'Input';
