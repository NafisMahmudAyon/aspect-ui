// ./app/src/components/Toggle/ToggleButton.tsx

'use client'

import React from 'react'
import { useToggleButtonGroup } from './ToggleButtonGroupContext'
import { cn } from '../../utils/cn'

interface ToggleButtonProps {
  value: string
  children: React.ReactNode
  className?: string
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  children,
  className = '',
  ...rest
}) => {
  const { selectedValues, handleChange, outline, disabled } = useToggleButtonGroup()

  const isSelected = Array.isArray(selectedValues)
    ? selectedValues.includes(value)
    : selectedValues === value

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
      className={cn("rounded-md px-4 py-2 transition-colors duration-200", getButtonStyles(), className)}
      onClick={() => handleChange(value)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

