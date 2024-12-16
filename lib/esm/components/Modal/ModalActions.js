'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useModal } from './ModalContext';
export const ModalAction = ({ children, className = '', ...rest }) => {
    const { handleOpen } = useModal();
    return (_jsx("button", { className: cn('rounded  px-4 py-2 transition-colors bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100', className), onClick: handleOpen, ...rest, children: children }));
};
