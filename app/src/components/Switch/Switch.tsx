'use client'

import React from 'react'
import { cn } from '../../utils/cn'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label?: string
  className?: string
  switchClassName?: string
  activeClassName?: string
  deactiveClassName?: string
  activeSwitchClassName?: string
  deactiveSwitchClassName?: string
  labelClassName?: string
  switchIconEnabled?: boolean
  activeSwitchIcon?: React.ReactNode
  deactiveSwitchIcon?: React.ReactNode
  size?: "sm" | "md" | "lg"
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  size ='md',
  className = '',
  switchClassName = '',
  activeClassName = '',
  deactiveClassName = '',
  activeSwitchClassName = '',
  deactiveSwitchClassName = '',
  labelClassName = '',
  switchIconEnabled = true,
  activeSwitchIcon,
  deactiveSwitchIcon
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  const sizeClasses = {
    sm: 'w-[28px] h-[16px]',
    md: 'w-[36px] h-[20px]',
    lg: 'w-[48px] h-[28px]',
  }

  const switchSizeClasses = {
    sm: 'size-[12px]',
    md: 'size-[16px]',
    lg: 'size-[22px]',
  }

  return (
    <label
      className={cn("inline-flex cursor-pointer items-center", disabled ? 'cursor-not-allowed opacity-50' : '', className)}
    >
      <div className={cn("relative", switchClassName)}>
        <input
          type='checkbox'
          className={cn('sr-only')}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <div
          className={cn("rounded-full shadow-inner transition-colors duration-300 ease-in-out", sizeClasses[size], checked ? cn('bg-primary-900 dark:bg-primary-200', activeClassName) : cn('bg-primary-200 dark:bg-primary-900', deactiveClassName))}
        ></div>
        <div
          className={cn("absolute -translate-y-1/2 top-1/2 left-0.5 rounded-full flex items-center justify-center shadow-sm leading-none transition-transform duration-300 ease-in-out", switchSizeClasses[size], checked ? cn('translate-x-[calc(100%-0.125rem)] transform bg-primary-200 dark:bg-primary-900', activeSwitchClassName) : cn('bg-primary-900 dark:bg-primary-200', deactiveSwitchClassName))}
        >
          {switchIconEnabled && activeSwitchIcon && (
            <>
            { deactiveSwitchIcon ? <>{checked ? activeSwitchIcon : deactiveSwitchIcon}</> : activeSwitchIcon}
            </>
          )}
        </div>
      </div>
      {label && <span className={cn("ml-3", labelClassName)}>{label}</span>}
    </label>
  )
}