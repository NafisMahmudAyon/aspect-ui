// components/Timeline/TimelineItem.tsx
import React from 'react'
import { cn } from '../../utils/cn'

type TimelineItemProps = {
  children: React.ReactNode
  position?: 'left' | 'right'
  isMixed?: boolean
  icon?: React.ReactNode
  className?: string
  containerClassName?: string
  dotClassName?: string
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  position = 'left',
  isMixed = false,
  icon,
  className = '',
  containerClassName = '',
  dotClassName = '',
  ...rest
}) => {
  const isLeft = position === 'left'

  return (
    <div
      className={cn('mb-8 flex w-full items-center justify-between', className)}
      {...rest}
    >
      {/* Content wrapper */}
      <div
        className={cn(
          'bg-bg rounded-lg p-4 shadow-sm transition-all duration-200',
          isLeft ? 'mr-auto' : 'order-1 ml-auto',
          isMixed ? 'w-5/12' : 'w-[calc(100%-2rem)]',
          containerClassName
        )}
      >
        {children}
      </div>

      {/* Dot */}
      <div
        className={cn(
          'bg-bg-light text-text absolute z-10 flex h-8 w-8 shrink-0 -translate-x-1/2 items-center justify-center rounded-full',
          isMixed ? 'left-1/2' : isLeft ? 'left-full' : '',
          dotClassName
        )}
      >
        {icon || <div className='bg-text h-3 w-3 rounded-full' />}
      </div>
    </div>
  )
}
