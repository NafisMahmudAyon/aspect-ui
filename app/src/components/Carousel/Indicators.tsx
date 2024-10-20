'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { useCarouselContext } from './CarouselContext'
import { DotButton, useDotButton } from './CarouselDotButton'
import { carouselTheme } from './theme'

export interface CarouselIndicatorsProps
  extends HTMLAttributes<HTMLDivElement> {
  dotButtonStyle?: string
}

export const CarouselIndicators = forwardRef<
  HTMLDivElement,
  CarouselIndicatorsProps
>(({ className, dotButtonStyle, ...props }, ref: Ref<HTMLDivElement>) => {
  const { emblaApi } = useCarouselContext()
  const theme = carouselTheme
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
  return (
    <div
      {...props}
      className={`${theme.controls.indicators.container} ${className}`}
      ref={ref}
    >
      {scrollSnaps.map((number, index) => (
        <DotButton
          key={number}
          onClick={() => onDotButtonClick(index)}
          className={`${theme.controls.indicators.dot} ${
            index === selectedIndex && 'border-metal-900 dark:border-metal-100'
          } ${dotButtonStyle}`}
        />
      ))}
    </div>
  )
})

CarouselIndicators.displayName = 'CarouselIndicators'
