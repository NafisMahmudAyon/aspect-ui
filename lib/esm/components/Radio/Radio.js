// ./app/src/components/Radio/Radio.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Radio = ({ id, name, value, label, checked, onChange }) => {
    return (_jsxs("div", { className: 'flex items-center', children: [_jsx("input", { type: 'radio', id: id, name: name, value: value, checked: checked, onChange: onChange, className: 'form-radio h-5 w-5 text-primary-200 dark:text-primary-800 checked:text-primary-900 dark:checked:text-primary-200 accent-primary-800 dark:accent-primary-100 peer' }), _jsx("label", { htmlFor: id, className: 'ml-2 text-primary-800 dark:text-primary-200 peer-checked:text-primary-900 peer-checked:dark:text-primary-100', children: label })] }));
};
