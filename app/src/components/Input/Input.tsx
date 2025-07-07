'use client'

import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useState
} from 'react'
import { cn } from '../../utils/cn'
import { Tooltip, TooltipAction, TooltipContent } from '../Tooltip'
import { Eye, EyeOff, Mail } from 'lucide-react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type?: string
  error?: string
  icon?: ReactNode
  disabled?: boolean
  labelClassName?: string
  iconClassName?: string
  className?: string
  wrapperClassName?: string
  errorClassName?: string
  passwordIconClassName?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = 'text',
      error,
      icon = <Mail />,
      labelClassName = '',
      iconClassName = '',
      className = '',
      wrapperClassName = '',
      errorClassName = '',
      passwordIconClassName = '',
      onChange,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const [isShown, setIsShown] = useState(false)

    const handleClick = () => setIsShown(!isShown)

    const inputType = type === 'password' && isShown ? 'text' : type

    return (
      <fieldset className={cn('mb-4', wrapperClassName)}>
        {label && (
          <label
            className={cn(
              'text-text mb-1 block text-sm font-medium',
              disabled && 'pointer-events-none opacity-50',
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        <div className='relative'>
          {icon && (
            <div
              className={cn(
                'text-text pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4',
                disabled ? 'pointer-events-none opacity-50' : '',
                error ? 'text-error-foreground' : '',
                iconClassName
              )}
            >
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={inputType}
            className={cn(
              'placeholder:text-text-muted selection:bg-primary selection:text-primary-foreground focus-visible:border-border focus:ring-border w-full rounded-md border px-3 py-2 ps-11 shadow-xs focus:ring-2 focus:outline-hidden',
              type === 'password' && 'pe-11',
              error ? 'border-error-foreground' : 'border-border',
              'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
              disabled ? 'pointer-events-none opacity-50' : '',
              className
            )}
            onChange={event => {
              onChange?.(event)
            }}
            {...rest}
          />
          {type === 'password' && (
            <Tooltip>
              <TooltipAction
                className={cn(
                  'text-text absolute inset-y-0 end-0 me-4 flex cursor-pointer items-center',
                  passwordIconClassName ? passwordIconClassName : iconClassName
                )}
              >
                <div onClick={handleClick}>
                  {isShown ? <Eye /> : <EyeOff />}
                </div>
              </TooltipAction>
              <TooltipContent className='text-sm text-nowrap'>
                {isShown ? 'Show Password' : 'Hide Password'}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        {error && (
          <p
            className={cn('text-error-foreground mt-1 text-sm', errorClassName)}
          >
            {error}
          </p>
        )}
      </fieldset>
    )
  }
)

Input.displayName = 'Input'
