'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { useAccordion } from './AccordionContext';
export const AccordionContent = ({ children, isOpen, className = '', ...rest }) => {
    const { contentClassName: accordionContentClassName } = useAccordion();
    return (_jsx(AnimatePresence, { initial: false, children: isOpen && (_jsx(motion.div, { initial: 'collapsed', animate: 'open', exit: 'collapsed', variants: {
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 }
            }, transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }, children: _jsx("div", { className: cn('overflow-hidden border-t border-border bg-bg p-4 text-sm', accordionContentClassName, className), ...rest, children: children }) })) }));
};
