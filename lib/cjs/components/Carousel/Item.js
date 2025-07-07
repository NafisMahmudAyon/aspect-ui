'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cloneElement, forwardRef, isValidElement } from 'react';
import { cn } from '../../utils/cn';
export const CarouselItem = forwardRef(({ children, asChild, className, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
        return cloneElement(children, {
            itemRef: ref,
            ...props
        });
    }
    return (_jsx("div", { ...props, className: cn('h-auto min-w-0 flex-[0_0_100%] overflow-hidden pl-4', className), ref: ref, children: children }));
});
CarouselItem.displayName = 'CarouselItem';
