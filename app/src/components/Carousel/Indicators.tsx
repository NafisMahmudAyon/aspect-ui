'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useCarouselContext } from './CarouselContext'
import { DotButton, useDotButton } from './CarouselDotButton'

export interface CarouselIndicatorsProps
  extends HTMLAttributes<HTMLDivElement> {
  dotButtonStyle?: string
}

export const CarouselIndicators = forwardRef<
  HTMLDivElement,
  CarouselIndicatorsProps
>(({ className, dotButtonStyle, ...props }, ref: Ref<HTMLDivElement>) => {
  const { emblaApi } = useCarouselContext()
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
  return (
    <div
      {...props}
      className={cn(
        'absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 flex-wrap items-center gap-2',
        className
      )}
      ref={ref}
    >
      {scrollSnaps.map((number, index) => (
        <DotButton
          key={number}
          onClick={() => onDotButtonClick(index)}
          className={cn(
            'border-border inline-flex size-3 rounded-full border-2',
            `${index === selectedIndex && 'border-primary'}`,
            dotButtonStyle
          )}
        />
      ))}
    </div>
  )
})

CarouselIndicators.displayName = 'CarouselIndicators'
