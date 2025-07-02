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
  size?: "small" | "medium" | "large"
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  size = 'medium',
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

  const sizeClasses = {
    small: 'w-[2rem] h-[1.15rem]',
    medium: 'w-[2.5rem] h-[1.406rem]',
    large: 'w-[3rem] h-[1.687rem]',
  }

  const switchSizeClasses = {
    small: cn('size-[calc(1.15rem-3px)]', checked ? cn('translate-x-[calc(100%-2px)] transform bg-primary-foreground text-primary', activeSwitchClassName) : cn('bg-primary text-primary-foreground translate-x-[2px]', deactiveSwitchClassName)),
    medium: cn('size-[calc(1.406rem-3px)]', checked ? cn('translate-x-[calc(100%-2px)] transform bg-primary-foreground text-primary', activeSwitchClassName) : cn('bg-primary text-primary-foreground translate-x-[2px]', deactiveSwitchClassName)),
    large: cn('size-[calc(1.687rem-3px)]', checked ? cn('translate-x-[calc(100%-3px)] transform bg-primary-foreground text-primary', activeSwitchClassName) : cn('bg-primary text-primary-foreground translate-x-[2px]', deactiveSwitchClassName)),
  }

  return (
    <div
      className={cn("inline-flex cursor-pointer items-center", disabled ? 'cursor-not-allowed opacity-50 pointer-events-none' : '', className)}
    >
      <div
        className={cn("inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none", sizeClasses[size], checked ? cn('bg-primary', activeClassName) : cn('bg-primary-foreground', deactiveClassName, switchClassName))}
        onClick={() => onChange(!checked)}
      >
        <div
          className={cn("rounded-full flex items-center justify-center shadow-sm leading-none transition-transform duration-300 ease-in-out", switchSizeClasses[size])}
        >
          {switchIconEnabled && activeSwitchIcon && (
            <>
              {deactiveSwitchIcon ? <>{checked ? activeSwitchIcon : deactiveSwitchIcon}</> : activeSwitchIcon}
            </>
          )}
        </div>
      </div>
      {label && <span className={cn("ml-3 text-text", labelClassName)}>{label}</span>}
    </div>
  )
}