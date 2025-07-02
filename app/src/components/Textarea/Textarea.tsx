// ./app/src/components/Textarea/Textarea.tsx

'use client'

import React, { forwardRef } from 'react'
import { cn } from '../../utils/cn'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  className?: string
  labelClassName?: string
  wrapperClassName?: string
  errorClassName?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", labelClassName = "", wrapperClassName = "", errorClassName = "", ...rest }, ref) => {
    return (
      <fieldset className={cn('mb-4', wrapperClassName)}>
        {label && (
          <label className={cn('mb-1 block text-sm font-medium text-text', labelClassName)}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full rounded-md border placeholder:text-text-muted shadow-xs selection:bg-primary selection:text-primary-foreground focus-visible:border-border focus:outline-hidden focus:ring-2 focus:ring-border px-3 py-2 ${error ? 'border-error-500' : 'border-border'} ${className})`}
          {...rest}
        />
        {error && <p className={cn('mt-1 text-xs text-error-600', errorClassName)}>{error}</p>}
      </fieldset>
    )
  }
)

Textarea.displayName = 'Textarea'
