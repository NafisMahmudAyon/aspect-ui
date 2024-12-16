'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React, { isValidElement, cloneElement } from 'react';
import { useAccordion } from './AccordionContext';
import { cn } from '../../utils/cn';
export const AccordionItem = ({ children, id, disabled = false, className = '', ...rest }) => {
    const { openItems, toggleItem } = useAccordion();
    const isOpen = openItems.includes(id);
    return (_jsx("div", { className: cn('overflow-hidden rounded-md border', isOpen
            ? 'border-primary-900 dark:border-primary-100'
            : 'border-primary-800 dark:border-primary-100', disabled ? 'opacity-50' : '', className), ...rest, children: React.Children.map(children, child => {
            if (isValidElement(child)) {
                const childProps = {
                    isOpen,
                    onToggle: disabled ? undefined : () => toggleItem(id),
                    disabled
                };
                return cloneElement(child, childProps);
            }
            return child;
        }) }));
};
