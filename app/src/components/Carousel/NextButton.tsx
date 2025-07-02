'use client'
import {
  CarouselNextButton as NextBtn,
  usePrevNextButtons
} from './CarouselArrowButtons'
import { useCarouselContext } from './CarouselContext'

export const NextButton = () => {
  const { emblaApi } = useCarouselContext()
  const { nextBtnDisabled, onNextButtonClick } = usePrevNextButtons(emblaApi)
  return <NextBtn onClick={onNextButtonClick} disabled={nextBtnDisabled} />
}
