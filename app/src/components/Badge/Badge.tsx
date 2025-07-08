import React from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps {
    children: React.ReactNode
    variant?: 'default' | 'outline' | 'ghost'
    className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, variant="default", className="" }) => {
  const variationStyle = ():string => {
    switch (variant) {
      case 'default':
        return 'border-transparent bg-primary text-primary-foreground '
      case 'outline':
        return 'border-border text-text'
      case 'ghost':
        return 'hover:bg-bg-light hover:text-text border-transparent'
    }
  }
  const baseStyle = 'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 focus-visible:border-border transition-[color,box-shadow] overflow-hidden'
  return (
    <span className={cn( baseStyle, variationStyle(), className)}>{children}</span>
  )
}