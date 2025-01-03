'use client'
import {
  CarouselPrevButton as PrevBtn,
  usePrevNextButtons
} from './CarouselArrowButtons'
import { useCarouselContext } from './CarouselContext'

export const PrevButton = () => {
  const { emblaApi } = useCarouselContext()
  const { prevBtnDisabled, onPrevButtonClick } = usePrevNextButtons(emblaApi)
  return <PrevBtn onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
}
