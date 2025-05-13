'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useModal } from './ModalContext';
import { cn } from '../../utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalPortal } from './ModalPortal';
export const ModalContent = forwardRef(({ children, className = '', overlayClassName = '', ...rest }, ref) => {
    const { isOpen } = useModal();
    if (!isOpen)
        return null;
    return (_jsx(AnimatePresence, { children: _jsx(ModalPortal, { className: overlayClassName, children: _jsx(motion.div, { className: cn('aspect-ui-modal', className), ...rest, ref: ref, initial: { scale: 0.5, opacity: 0, y: 40 }, animate: { opacity: 1, scale: 1, y: 0 }, transition: { duration: 0.3, type: 'spring', damping: 25, stiffness: 500 }, exit: { opacity: 0.5, scale: 0.5, y: 40 }, children: children }) }) }));
});
