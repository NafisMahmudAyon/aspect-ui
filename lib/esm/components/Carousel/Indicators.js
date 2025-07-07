'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useCarouselContext } from './CarouselContext';
import { DotButton, useDotButton } from './CarouselDotButton';
export const CarouselIndicators = forwardRef(({ className, dotButtonStyle, ...props }, ref) => {
    const { emblaApi } = useCarouselContext();
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    return (_jsx("div", { ...props, className: cn('absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 flex-wrap items-center gap-2', className), ref: ref, children: scrollSnaps.map((number, index) => (_jsx(DotButton, { onClick: () => onDotButtonClick(index), className: cn('border-border inline-flex size-3 rounded-full border-2', `${index === selectedIndex && 'border-primary'}`, dotButtonStyle) }, number))) }));
});
CarouselIndicators.displayName = 'CarouselIndicators';
