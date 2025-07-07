import { Check } from 'lucide-react'
import React, { ChangeEvent } from 'react'
import { cn } from '../../utils/cn'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'rounded'
  checkedIcon?: React.ReactNode
  checkboxClassName?: string
  labelClassName?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
  size = 'md',
  variant = 'default',
  checkedIcon,
  checkboxClassName = '',
  labelClassName = ''
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event.target.checked)
    }
  }

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20
  }

  const variantClasses = {
    default: 'rounded-sm',
    rounded: 'rounded-full'
  }

  return (
    <label
      className={`text-text flex cursor-pointer items-center gap-3 transition-all duration-200 select-none ${
        disabled && 'pointer-events-none opacity-50'
      } ${className} `}
    >
      <div className='relative'>
        <input
          type='checkbox'
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className='sr-only'
        />
        <div
          className={cn(
            sizeClasses[size],
            variantClasses[variant],
            'flex items-center justify-center border transition-all duration-200 ease-in-out',
            checked
              ? 'bg-primary text-bg-light border-primary shadow-md'
              : 'border-border bg-transparent',
            checkboxClassName
          )}
        >
          {checked &&
            (checkedIcon ? (
              checkedIcon
            ) : (
              <Check
                size={iconSizes[size]}
                className={`transition-all duration-200 ease-in-out`}
              />
            ))}
        </div>
      </div>
      <span className={cn('transition-colors duration-200', labelClassName)}>
        {label}
      </span>
    </label>
  )
}
