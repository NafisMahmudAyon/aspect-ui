'use client'
import { cn } from '../../utils/cn'
import {
  CarouselPrevButton as PrevBtn,
  usePrevNextButtons
} from './CarouselArrowButtons'
import { useCarouselContext } from './CarouselContext'

export const PrevButton = ({className, ...rest}: {className?: string}) => {
  const { emblaApi } = useCarouselContext()
  const { prevBtnDisabled, onPrevButtonClick } = usePrevNextButtons(emblaApi)
  return <PrevBtn onClick={onPrevButtonClick} disabled={prevBtnDisabled} className={cn(className)} {...rest} />
}
