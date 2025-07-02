'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { CarouselPrevButton as PrevBtn, usePrevNextButtons } from './CarouselArrowButtons';
import { useCarouselContext } from './CarouselContext';
export const PrevButton = () => {
    const { emblaApi } = useCarouselContext();
    const { prevBtnDisabled, onPrevButtonClick } = usePrevNextButtons(emblaApi);
    return _jsx(PrevBtn, { onClick: onPrevButtonClick, disabled: prevBtnDisabled });
};
