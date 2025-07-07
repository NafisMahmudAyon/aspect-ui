'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
export const CarouselSlides = forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ...props, className: cn('-ml-4 flex', className), ref: ref, children: children }));
});
CarouselSlides.displayName = 'CarouselSlides';
