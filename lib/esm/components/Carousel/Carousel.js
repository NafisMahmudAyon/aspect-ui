'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import useEmblaCarousel from 'embla-carousel-react';
import { forwardRef } from 'react';
import { CarouselContext } from './CarouselContext';
import { CarouselViewport } from './Viewport';
import { carouselTheme } from './theme';
const Carousel = forwardRef(({ children, options, plugins, className, carouselViewportClasses }, ref) => {
    const theme = carouselTheme;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    return (_jsx("div", { className: `${theme.carouselContainer} ${className}`, ref: ref, children: _jsx(CarouselContext.Provider, { value: { emblaApi, emblaRef }, children: _jsx(CarouselViewport, { className: carouselViewportClasses, children: children }) }) }));
});
Carousel.displayName = 'Carousel';
export { Carousel };
