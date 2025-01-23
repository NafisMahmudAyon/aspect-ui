// ./app/src/components/Textarea/Textarea.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
export const Textarea = forwardRef(({ label, error, className = "", labelClassName = "", wrapperClassName = "", errorClassName = "", ...rest }, ref) => {
    return (_jsxs("fieldset", { className: cn('mb-4', wrapperClassName), children: [label && (_jsx("label", { className: cn('mb-1 block text-sm font-medium text-secondary-800 dark:text-secondary-200', labelClassName), children: label })), _jsx("textarea", { ref: ref, className: `w-full rounded-md border bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 placeholder:text-secondary-500 px-3 py-2 shadow-xs focus-visible:border-primary-200 focus:outline-hidden focus:ring-2 focus:ring-primary-200 ${error ? 'border-error-500' : 'border-gray-300'} ${className})`, ...rest }), error && _jsx("p", { className: cn('mt-1 text-xs text-error-600', errorClassName), children: error })] }));
});
Textarea.displayName = 'Textarea';
