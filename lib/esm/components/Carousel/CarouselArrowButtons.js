'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement, forwardRef, isValidElement, useCallback, useEffect, useState } from 'react';
import { cn } from '../../utils/cn';
import { useCarouselContext } from './CarouselContext';
export const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi)
            return;
        emblaApi.scrollPrev();
    }, [emblaApi]);
    const onNextButtonClick = useCallback(() => {
        if (!emblaApi)
            return;
        emblaApi.scrollNext();
    }, [emblaApi]);
    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);
    useEffect(() => {
        if (!emblaApi)
            return;
        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);
    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    };
};
const CarouselPrevButton = forwardRef(({ children, asChild, className = "", ...props }, ref) => {
    const { emblaApi } = useCarouselContext();
    const { onPrevButtonClick, prevBtnDisabled } = usePrevNextButtons(emblaApi);
    if (asChild && isValidElement(children)) {
        return cloneElement(children, {
            itemRef: ref,
            onClick: onPrevButtonClick,
            disabled: prevBtnDisabled,
            ...props
        });
    }
    return (_jsxs("button", { ...props, onClick: onPrevButtonClick, disabled: prevBtnDisabled, ref: ref, className: cn('inline-flex items-center justify-center border border-secondary-600 dark:border-secondary-300 rounded-full size-[2rem] text-primary-800 hover:text-primary-900 disabled:bg-primary-200/30 dark:disabled:bg-primary-800/30 disabled:cursor-not-allowed dark:hover:bg-primary-900/50 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 disabled:text-primary-200 dark:disabled:text-primary-800', className), type: 'button', children: [!children && _jsx("svg", { className: 'size-3 ', viewBox: '0 0 532 532', children: _jsx("path", { fill: 'currentColor', d: 'M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z' }) }), children] }));
});
CarouselPrevButton.displayName = 'CarouselPrevButton';
const CarouselNextButton = forwardRef(({ children, asChild, className = "", ...props }, ref) => {
    const { emblaApi } = useCarouselContext();
    const { onNextButtonClick, nextBtnDisabled } = usePrevNextButtons(emblaApi);
    if (asChild && isValidElement(children)) {
        return cloneElement(children, {
            itemRef: ref,
            onClick: onNextButtonClick,
            disabled: nextBtnDisabled,
            ...props
        });
    }
    return (_jsxs("button", { ...props, onClick: onNextButtonClick, disabled: nextBtnDisabled, ref: ref, className: cn('inline-flex items-center justify-center border border-secondary-600 dark:border-secondary-300 rounded-full size-[2rem] text-primary-800 hover:text-primary-900 disabled:bg-primary-200/30 dark:disabled:bg-primary-800/30 disabled:cursor-not-allowed dark:hover:bg-primary-900/50 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 disabled:text-primary-200 dark:disabled:text-primary-800', className), type: 'button', children: [!children && _jsx("svg", { className: 'size-3 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100', viewBox: '0 0 532 532', children: _jsx("path", { fill: 'currentColor', d: 'M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z' }) }), children] }));
});
CarouselNextButton.displayName = 'CarouselNextButton';
export { CarouselNextButton, CarouselPrevButton };
