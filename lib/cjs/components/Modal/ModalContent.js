'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useModal } from './ModalContext';
import { ModalPortal } from './ModalPortal';
const ModalContentComponent = forwardRef(({ children, className = '', ...rest }, ref) => {
    const { isOpen } = useModal();
    if (!isOpen)
        return null;
    return (_jsx(AnimatePresence, { children: _jsx(ModalPortal, { children: _jsx(motion.div, { className: cn('aspect-ui-modal bg-bg border-border max-w-[calc(100%-2rem)] rounded-lg border p-4 shadow-lg', className), ...rest, ref: ref, initial: { scale: 0.5, opacity: 0, y: 40 }, animate: { opacity: 1, scale: 1, y: 0 }, transition: {
                    duration: 0.3,
                    type: 'spring',
                    damping: 25,
                    stiffness: 500
                }, exit: { opacity: 0.5, scale: 0.5, y: 40 }, children: children }) }) }));
});
ModalContentComponent.displayName = 'ModalContent';
export const ModalContent = ModalContentComponent;
