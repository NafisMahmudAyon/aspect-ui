import React from 'react'
import { cn } from '../../utils/cn'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cn(
        'bg-bg text-text border-border flex flex-col gap-6 rounded-lg border py-6 shadow-sm',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
