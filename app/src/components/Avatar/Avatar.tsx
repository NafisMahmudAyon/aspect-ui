import React from 'react'
import { cn } from '../../utils/cn'
import { AvatarImage } from './AvatarImage'

interface AvatarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

export const Avatar: React.FC<AvatarProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'relative flex size-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-800 dark:bg-primary-900 dark:text-primary-200',
        className
      )}
      {...rest}
    >
      {children && children}
      {!children && <AvatarImage />}
    </div>
  )
}
