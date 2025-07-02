// ./app/src/components/Radio/Radio.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const Radio = ({ id, name, value, label, checked, className = "", labelClassName = "", wrapperClassName = "", onChange }) => {
    return (_jsxs("div", { className: cn('flex items-center', wrapperClassName), children: [_jsx("input", { type: 'radio', id: id, name: name, value: value, checked: checked, onChange: onChange, className: cn('form-radio h-5 w-5 accent-text', className) }), _jsx("label", { htmlFor: id, className: cn('ml-2 text-text', labelClassName), children: label })] }));
};
