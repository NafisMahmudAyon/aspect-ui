'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import useEmblaCarousel from 'embla-carousel-react';
import { forwardRef } from 'react';
import { CarouselContext } from './CarouselContext';
import { CarouselViewport } from './Viewport';
import { cn } from '../../utils/cn';
const Carousel = forwardRef(({ children, options, plugins, className, carouselViewportClasses, ...rest }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    return (_jsx("div", { className: cn("w-full relative pb-[2.4rem]", className), ref: ref, ...rest, children: _jsx(CarouselContext.Provider, { value: { emblaApi, emblaRef }, children: _jsx(CarouselViewport, { className: carouselViewportClasses, children: children }) }) }));
});
Carousel.displayName = 'Carousel';
export { Carousel };
