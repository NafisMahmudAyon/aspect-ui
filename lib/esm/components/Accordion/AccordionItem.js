'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React, { cloneElement, isValidElement } from 'react';
import { cn } from '../../utils/cn';
import { useAccordion } from './AccordionContext';
export const AccordionItem = ({ children, id, disabled = false, className = '', ...rest }) => {
    const { openItems, toggleItem } = useAccordion();
    const isOpen = openItems.includes(id);
    return (_jsx("div", { className: cn('overflow-hidden rounded-md border border-border', disabled ? 'opacity-50' : '', className), ...rest, children: React.Children.map(children, child => {
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
