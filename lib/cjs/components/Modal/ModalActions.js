'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useModal } from './ModalContext';
export const ModalAction = ({ children, className = '', ...rest }) => {
    const { handleOpen } = useModal();
    return (_jsx("button", { className: cn('inline-flex gap-2 items-center justify-center font-medium rounded-md focus:outline-hidden focus-visible:border-ring focus-visible:ring-border transition ease-in-out duration-200 focus-visible:ring-1 px-4 py-2 bg-bg-light text-text cursor-pointer', className), onClick: handleOpen, ...rest, children: children }));
};
