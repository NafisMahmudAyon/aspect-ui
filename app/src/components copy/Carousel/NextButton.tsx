'use client'
import { cn } from '../../utils/cn'
import {
  CarouselNextButton as NextBtn,
  usePrevNextButtons
} from './CarouselArrowButtons'
import { useCarouselContext } from './CarouselContext'

export const NextButton = ({ className, ...rest }: { className?: string }) => {
  const { emblaApi } = useCarouselContext()
  const { nextBtnDisabled, onNextButtonClick } = usePrevNextButtons(emblaApi)
  return <NextBtn onClick={onNextButtonClick} disabled={nextBtnDisabled} className={cn(className)} {...rest} />
}
