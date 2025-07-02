'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { CarouselNextButton as NextBtn, usePrevNextButtons } from './CarouselArrowButtons';
import { useCarouselContext } from './CarouselContext';
export const NextButton = () => {
    const { emblaApi } = useCarouselContext();
    const { nextBtnDisabled, onNextButtonClick } = usePrevNextButtons(emblaApi);
    return _jsx(NextBtn, { onClick: onNextButtonClick, disabled: nextBtnDisabled });
};
