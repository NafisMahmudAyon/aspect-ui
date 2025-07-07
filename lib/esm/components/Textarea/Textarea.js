// ./app/src/components/Textarea/Textarea.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
export const Textarea = forwardRef(({ label, error, className = '', labelClassName = '', wrapperClassName = '', errorClassName = '', ...rest }, ref) => {
    return (_jsxs("fieldset", { className: cn('mb-4', wrapperClassName), children: [label && (_jsx("label", { className: cn('text-text mb-1 block text-sm font-medium', labelClassName), children: label })), _jsx("textarea", { ref: ref, className: `placeholder:text-text-muted selection:bg-primary selection:text-primary-foreground focus-visible:border-border focus:ring-border w-full rounded-md border px-3 py-2 shadow-xs focus:ring-2 focus:outline-hidden ${error ? 'border-error-500' : 'border-border'} ${className})`, ...rest }), error && (_jsx("p", { className: cn('text-error-600 mt-1 text-xs', errorClassName), children: error }))] }));
});
Textarea.displayName = 'Textarea';
