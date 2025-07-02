'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { cn } from '../../utils/cn'

interface ToastAction {
  label: string
  onClick: () => void
  buttonClassName?: string
}

interface ToastProps {
  className?: string
  containerClassName?: string
  message: string
  description?: string
  messageClassName?: string
  messageAreaClassName?: string
  descriptionClassName?: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
  onClose?: () => void
  action?: ToastAction
}

const Toast: React.FC<ToastProps> = ({
  className = "",
  containerClassName = "",
  message,
  description,
  messageClassName = '',
  messageAreaClassName = '',
  descriptionClassName = '',
  type = 'info',
  duration = 3000,
  onClose,
  action,
}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (duration === Infinity) return

    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onClose) onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-success-100 dark:bg-success-900 hover:bg-success-200 dark:hover:bg-success-800 text-success-800 dark:text-success-200 hover:text-success-900 dark:hover:text-success-100'
      case 'error':
        return 'bg-error-100 dark:bg-error-900 hover:bg-error-200 dark:hover:bg-error-800 text-error-800 dark:text-error-200 hover:text-error-900 dark:hover:text-error-100'
      case 'warning':
        return 'bg-warning-100 dark:bg-warning-900 hover:bg-warning-200 dark:hover:bg-warning-800 text-warning-800 dark:text-warning-200 hover:text-warning-900 dark:hover:text-warning-100'
      default:
        return 'bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100'
    }
  }

  return (
    <div
      className={cn("fixed z-9999 bottom-4 right-4 rounded-md px-4 py-2 shadow-lg transition-opacity duration-300", getBackgroundColor(), className)}
    >
      <div className={cn('flex items-center justify-between', containerClassName)}>
        <div className={messageAreaClassName}>
          <div className={cn("font-medium", messageClassName)}>{message}</div>
          {description && ( // Render description if provided
            <div className={cn('mt-1 text-sm opacity-90', descriptionClassName)}>{description}</div>
          )}
        </div>
        {action && (
          <button
            onClick={action.onClick}
            className={cn('ml-4 rounded-md  px-2 py-1 text-sm font-medium ', action.buttonClassName)}
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  )
}

interface ToastOptions {
  className?: string
  containerClassName?: string
  message: string
  description?: string
  messageClassName?: string
  messageAreaClassName?: string
  descriptionClassName?: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
  action?: ToastAction
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastOptions[]>([])

  const toast = useCallback((options: ToastOptions) => {
    setToasts(prevToasts => [...prevToasts, options])
  }, [])

  const removeToast = useCallback((index: number) => {
    setToasts(prevToasts => prevToasts.filter((_, i) => i !== index))
  }, [])

  const promise = useCallback(
    <T,>(
      promise: Promise<T>,
      options: {
        loading: string
        loadingDescription?: string // New field for loading description
        success: string
        successDescription?: string // New field for success description
        error: string
        errorDescription?: string // New field for error description
      }
    ) => {
      const toastId = Date.now()
      toast({
        message: options.loading,
        description: options.loadingDescription,
        type: 'info',
        duration: Infinity
      })

      promise
        .then(result => {
          removeToast(toastId)
          toast({
            message: options.success,
            description: options.successDescription,
            type: 'success'
          })
          return result
        })
        .catch(error => {
          removeToast(toastId)
          toast({
            message: options.error,
            description: options.errorDescription,
            type: 'error'
          })
          throw error
        })

      return promise
    },
    [toast, removeToast]
  )

  const ToastContainer: React.FC = () => (
    <>
      {/* <div className='fixed bottom-4 right-4 flex flex-col space-y-2'> */}
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          className={toast.className}
          containerClassName={toast.containerClassName}
          message={toast.message}
          description={toast.description}
          messageClassName={toast.messageClassName}
          messageAreaClassName={toast.messageAreaClassName}
          descriptionClassName={toast.descriptionClassName}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(index)}
          action={toast.action}
        />
      ))}
      {/* </div> */}
    </>
  )

  return { toast, ToastContainer, promise }
}
