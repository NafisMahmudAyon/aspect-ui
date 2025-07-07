'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useModal } from './ModalContext';
export const ModalAction = ({ children, className = '', ...rest }) => {
    const { handleOpen } = useModal();
    return (_jsx("button", { className: cn('focus-visible:border-ring focus-visible:ring-border bg-bg-light text-text inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-medium transition duration-200 ease-in-out focus:outline-hidden focus-visible:ring-1', className), onClick: handleOpen, ...rest, children: children }));
};
