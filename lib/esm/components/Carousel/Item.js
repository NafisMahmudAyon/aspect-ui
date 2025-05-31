'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cloneElement, forwardRef, isValidElement } from 'react';
import { cn } from '../../utils/cn';
/**
 * CarouselItem component
 *
 * @param {HTMLAttributes<HTMLDivElement>} props - The props for the CarouselItem component
 * @param {Ref<HTMLDivElement>} ref - The ref for the CarouselItem component
 * @returns {ReactElement} The CarouselItem component
 *
 * @example
 * import { CarouselItem } from "@/components/aspect-ui/Carousel";
 *
 * <CarouselItem>
 *  {children}
 * </CarouselItem>
 */
export const CarouselItem = forwardRef(({ children, asChild, className, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
        return cloneElement(children, {
            itemRef: ref,
            ...props
        });
    }
    return (_jsx("div", { ...props, className: cn("flex-[0_0_100%] h-auto min-w-0 overflow-hidden pl-4", className), ref: ref, children: children }));
});
CarouselItem.displayName = 'CarouselItem';
