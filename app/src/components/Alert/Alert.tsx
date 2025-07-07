'use client'
import { CircleAlert, CircleCheckBig, CircleX, Info, X } from 'lucide-react'
import React, { useState, type JSX } from 'react'
import { cn } from '../../utils/cn'

type AlertType = 'success' | 'warning' | 'error' | 'info'

interface AlertProps {
  type: AlertType
  children: React.ReactNode
  closeable?: boolean
  onClose?: () => void
  className?: string
  icon?: React.ReactNode
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  children,
  closeable = true,
  onClose,
  className = '',
  icon,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    if (onClose) {
      onClose()
    }
  }

  if (!isVisible) return null

  const getAlertStyles = (): string => {
    const baseStyles = `px-4 py-3 rounded-sm relative`
    switch (type) {
      case 'success':
        return `${baseStyles} bg-success border border-border text-text`
      case 'warning':
        return `${baseStyles} bg-warning border border-border text-text`
      case 'error':
        return `${baseStyles} bg-error border border-border text-text`
      case 'info':
        return `${baseStyles} bg-info border border-border text-text`
      default:
        return baseStyles
    }
  }

  const getIconStyles = (): string => {
    switch (type) {
      case 'success':
        return 'text-success-foreground'
      case 'warning':
        return 'text-warning-foreground'
      case 'error':
        return 'text-error-foreground'
      case 'info':
        return 'text-info-foreground'
      default:
        return ''
    }
  }
  const getCloseStyles = (): string => {
    switch (type) {
      case 'success':
        return 'text-success-foreground'
      case 'warning':
        return 'text-warning-foreground'
      case 'error':
        return 'text-error-foreground'
      case 'info':
        return 'text-info-foreground'
      default:
        return ''
    }
  }

  const getIcon = (): JSX.Element => {
    switch (type) {
      case 'success':
        return <CircleCheckBig />
      case 'warning':
        return <CircleAlert />
      case 'error':
        return <CircleX />
      case 'info':
        return <Info />
      default:
        return <></>
    }
  }

  return (
    <div className={cn(getAlertStyles(), className)} role='alert' {...rest}>
      <div className='flex items-center'>
        <span className={`mr-2 ${getIconStyles()}`}>{icon || getIcon()}</span>
        <span className='block flex-1'>{children}</span>
      </div>
      {closeable && (
        <span
          className='absolute top-0 right-0 bottom-0 px-4 py-3'
          onClick={handleClose}
          title='close'
          role='button'
          aria-label='close'
        >
          <X className={cn(getCloseStyles())} />
        </span>
      )}
    </div>
  )
}
