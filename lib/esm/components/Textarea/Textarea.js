// ./app/src/components/Textarea/Textarea.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
export const Textarea = forwardRef(({ label, error, className = "", labelClassName = "", wrapperClassName = "", errorClassName = "", ...rest }, ref) => {
    return (_jsxs("fieldset", { className: cn('mb-4', wrapperClassName), children: [label && (_jsx("label", { className: cn('mb-1 block text-sm font-medium text-text', labelClassName), children: label })), _jsx("textarea", { ref: ref, className: `w-full rounded-md border placeholder:text-text-muted shadow-xs selection:bg-primary selection:text-primary-foreground focus-visible:border-border focus:outline-hidden focus:ring-2 focus:ring-border px-3 py-2 ${error ? 'border-error-500' : 'border-border'} ${className})`, ...rest }), error && _jsx("p", { className: cn('mt-1 text-xs text-error-600', errorClassName), children: error })] }));
});
Textarea.displayName = 'Textarea';
