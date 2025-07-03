import React from 'react'
import { cn } from '../../utils/cn'

interface AvatarBadgeProps {
  className?: string
  type?: 'counter' | 'status'
  status?:
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'active'
  | 'away'
  | 'notDisturb'
  | 'invisible'
  counter?: number
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  icon?: React.ReactElement
  iconEnabled?: boolean
  iconSize?: number
}

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({
  className = '',
  type = 'status',
  status = 'success',
  counter,
  position = 'bottom-right',
  icon,
  iconEnabled,
  iconSize = 6,
  ...rest
}) => {
  const getPosition = (position: string) => {
    if (position === 'bottom-left') {
      return 'bottom-0 left-0'
    } else if (position === 'bottom-right') {
      return 'bottom-0 right-0'
    } else if (position === 'top-left') {
      return 'top-0 left-0'
    } else if (position === 'top-right') {
      return 'top-0 right-0'
    }
    return 'bottom-0 right-0'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-success-foreground text-success'
      case 'warning':
        return 'bg-warning-foreground text-warning'
      case 'error':
        return 'bg-error-foreground text-error'
      case 'info':
        return 'bg-info-foreground text-info'
      case 'active':
        return 'bg-success-foreground text-primary'
      case 'away':
        return 'bg-warning-foreground text-warning'
      case 'notDisturb':
        return 'bg-error-foreground text-error'
      case 'invisible':
        return 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
      default:
        return 'bg-success-foreground text-success'
    }
  }

  if (type === 'status') {
    return (
      <div
        className={cn(
          'absolute flex size-3 items-center justify-center rounded-full',
          getStatusColor(status),
          getPosition(position),
          className
        )} {...rest}
      >
        {iconEnabled && icon && icon}
        {iconEnabled && !icon && (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12' cy='12' r='11' fill='currentColor' />
          </svg>
        )}
      </div>
    )
  }
  if (type === 'counter') {
    return (
      <div
        className={cn(
          'absolute flex size-4 items-center justify-center rounded-full text-[12px]', getStatusColor(status),
          getPosition(position),
          className
        )} {...rest}
      >
        {counter}
      </div>
    )
  }
}
