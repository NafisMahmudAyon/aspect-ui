import React, { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'display-1'
  | 'display-2'
  | 'body-1'
  | 'body-2'
  | 'caption'

interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TypographyVariant
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption' | 'span'
  children?: React.ReactNode
  className?: string
}

export const Typography: React.FC<TypographyProps> = ({
  variant = '',
  tagName = 'p',
  children,
  className = '',
  ...rest
}) => {
  const TagName = tagName

  const getStyles = (): string => {
    switch (variant) {
      case 'h1':
        return 'text-h1'
      case 'h2':
        return 'text-h2'
      case 'h3':
        return 'text-h3'
      case 'h4':
        return 'text-h4'
      case 'h5':
        return 'text-h5'
      case 'h6':
        return 'text-h6'
      case 'body-1':
        return 'text-body-1'
      case 'body-2':
        return 'text-body-2'
      case 'caption':
        return 'text-caption'
      case 'display-1':
        return 'text-display-1'
      case 'display-2':
        return 'text-display-2'
      default:
        return ''
    }
  }

  // const Component = getComponent()
  const styles = getStyles()

  return (
    <TagName className={cn('text-text-muted', styles, className)} {...rest}>
      {children}
    </TagName>
  )
}
