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
      className={cn('flex flex-wrap items-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 w-full', className)}
      ref={ref}
    >
      {scrollSnaps.map((number, index) => (
        <DotButton
          key={number}
          onClick={() => onDotButtonClick(index)}
          className={cn("inline-flex size-3 rounded-full border-2 border-border", `${index === selectedIndex && 'border-primary'
            }`, dotButtonStyle)}
        />
      ))}
    </div>
  )
})

CarouselIndicators.displayName = 'CarouselIndicators'
