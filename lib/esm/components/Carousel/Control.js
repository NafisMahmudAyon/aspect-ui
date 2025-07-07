'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
export const CarouselControl = forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ...props, className: cn('absolute top-0 left-0 z-50 mt-[1.8rem] flex w-full items-center justify-between', className), ref: ref, children: children }));
});
CarouselControl.displayName = 'CarouselControl';
