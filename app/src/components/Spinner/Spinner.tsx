import React, { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large'
  className?: string
  thickness?: number
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  className = '',
  thickness = 2,
  ...rest
}) => {
  const sizeClasses = {
    small: 'size-4',
    medium: 'size-8',
    large: 'size-12'
  }

  return (
    <div
      className={cn(
        'text-primary inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        sizeClasses[size],
        className
      )}
      style={{ borderWidth: `${thickness}px` }}
      aria-label='loading...'
      role='status'
      {...rest}
    ></div>
  )
}
