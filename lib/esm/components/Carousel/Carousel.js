'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import useEmblaCarousel from 'embla-carousel-react';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { CarouselContext } from './CarouselContext';
import { CarouselViewport } from './Viewport';
const Carousel = forwardRef(({ children, options, plugins, className, carouselViewportClasses, ...rest }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    return (_jsx("div", { className: cn('relative w-full pb-[2.4rem]', className), ref: ref, ...rest, children: _jsx(CarouselContext.Provider, { value: { emblaApi, emblaRef }, children: _jsx(CarouselViewport, { className: carouselViewportClasses, children: children }) }) }));
});
Carousel.displayName = 'Carousel';
export { Carousel };
