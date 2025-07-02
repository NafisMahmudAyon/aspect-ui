'use client'
import React, { useState } from 'react'
import { cn } from '../../utils/cn'

interface ToggleProps {
  value: string
  children: React.ReactNode
  className?: string
  defaultSelected?: boolean
  outline?: boolean
  disabled?: boolean
  onChange?: (value: string, selected: boolean) => void
}

export const Toggle: React.FC<ToggleProps> = ({
  value,
  children,
  className = '',
  defaultSelected = false,
  outline = false,
  disabled = false,
  onChange,
  ...rest
}) => {
  const [isSelected, setIsSelected] = useState(defaultSelected)

  const handleClick = () => {
    if (disabled) return
    const newSelectedState = !isSelected
    setIsSelected(newSelectedState)
    onChange?.(value, newSelectedState)
  }

  const getButtonStyles = () => {
    if (disabled) {
      return 'text-secondary-300 dark:text-secondary-900'
    }

    if (outline) {
      return isSelected
        ? 'border border-primary-200 dark:border-primary-900 bg-primary-200 dark:bg-primary-900 text-primary-800 dark:text-primary-200 '
        : 'border border-primary-200 dark:border-primary-900 hover:border-primary-200 dark:hover:border-primary-900 hover:bg-primary-200 dark:hover:bg-primary-900 text-primary-800 dark:text-primary-200'
    }

    return isSelected
      ? 'bg-primary-200 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
      : 'hover:bg-primary-200 dark:hover:bg-primary-900 text-primary-800 dark:text-primary-200 '
  }

  return (
    <button
      className={cn("rounded-md px-4 py-2 transition-all duration-200", getButtonStyles(), className)}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
