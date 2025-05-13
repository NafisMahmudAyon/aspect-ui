'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { CarouselNextButton as NextBtn, usePrevNextButtons } from './CarouselArrowButtons';
import { useCarouselContext } from './CarouselContext';
export const NextButton = ({ className, ...rest }) => {
    const { emblaApi } = useCarouselContext();
    const { nextBtnDisabled, onNextButtonClick } = usePrevNextButtons(emblaApi);
    return _jsx(NextBtn, { onClick: onNextButtonClick, disabled: nextBtnDisabled, className: cn(className), ...rest });
};
