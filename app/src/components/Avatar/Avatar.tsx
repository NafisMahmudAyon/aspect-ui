import React from 'react'
import { cn } from '../../utils/cn'
import { AvatarImage } from './AvatarImage'

interface AvatarProps {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

export const Avatar: React.FC<AvatarProps> = ({
  className = '',
  children,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'relative flex size-12 items-center justify-center rounded-full bg-bg text-text overflow-hidden',
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children && children}
      {!children && <AvatarImage />}
    </div>
  )
}
