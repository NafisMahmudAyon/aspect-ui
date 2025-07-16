import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: string
  variant?: 'start' | 'center' | 'end' | 'full'
  className?: string
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double'
  children?: ReactNode
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  size = 'md',
  variant = 'full',
  borderStyle = 'solid',
  className = '',
  children,
  ...rest
}) => {
  const horizontalSizeStyles = {
    sm: 'border-t-[1px]',
    md: 'border-t-[2px]',
    lg: 'border-t-[3px]',
    xl: 'border-t-[4px]',
    '2xl': 'border-t-[6px]'
  }
  const verticalSizeStyles = {
    sm: 'border-l-[1px]',
    md: 'border-l-[2px]',
    lg: 'border-l-[3px]',
    xl: 'border-l-[4px]',
    '2xl': 'border-l-[6px]'
  }
  const borderStyleClassName = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
    double: 'border-double'
  }

  const baseStyles = `border-border ${orientation === 'horizontal' ? horizontalSizeStyles[size] : verticalSizeStyles[size]}`

  const orientationStyles = orientation === 'horizontal' ? 'w-full' : 'h-full'

  const variantStyles = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    full: ''
  }

  if (!children || variant === 'full') {
    return (
      <div
        className={cn(
          baseStyles,
          orientationStyles,
          borderStyleClassName[borderStyle],
          className
        )}
      ></div>
    )
  }

  return (
    <div className={`flex items-center ${variantStyles[variant]}`} {...rest}>
      {variant !== 'start' && (
        <span
          className={cn(
            'mr-4 flex-1',
            baseStyles,
            borderStyleClassName[borderStyle],
            orientationStyles,
            className
          )}
        ></span>
      )}
      <span className=''>{children}</span>
      {variant !== 'end' && (
        <span
          className={cn(
            'ml-4 flex-1',
            baseStyles,
            borderStyleClassName[borderStyle],
            orientationStyles,
            className
          )}
        ></span>
      )}
    </div>
  )
}
