'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from 'framer-motion';
import { useAccordion } from './AccordionContext';
import { cn } from '../../utils/cn';
export const AccordionContent = ({ children, isOpen, className = '', reset = false, ...rest }) => {
    const { contentClassName: accordionContentClassName, reset: accordionReset } = useAccordion();
    const accordionContentReset = accordionReset ?? reset;
    return (_jsx(AnimatePresence, { initial: false, children: isOpen && (_jsx(motion.div, { initial: 'collapsed', animate: 'open', exit: 'collapsed', variants: {
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 }
            }, transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }, children: _jsx("div", { className: cn('overflow-hidden border-t p-4', isOpen
                    ? accordionContentReset ? "" : 'border-primary-950 dark:border-primary-100 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                    : accordionContentReset ? "" : 'border-primary-950 dark:border-primary-100', accordionContentClassName, className), ...rest, children: children }) })) }));
};
