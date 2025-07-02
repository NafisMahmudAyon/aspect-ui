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
      className={cn("inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-primary-800 dark:text-primary-200", sizeClasses[size], className)}
      style={{ borderWidth: `${thickness}px` }}
      aria-label='loading...'
      role='status'
      {...rest}
    >
      {/* <span className='absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!'>
        Loading...
      </span> */}
    </div>
  )
}
