// ./app/src/components/Input/Input.tsx

'use client'

import { InputHTMLAttributes, forwardRef, ReactNode, useState, ChangeEvent } from 'react'
import { Hide, Mail, Show } from '../Icon/Form'
import { cn } from '../../utils/cn'
import { Tooltip, TooltipAction, TooltipContent } from '../Tooltip'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type?: string
  error?: string
  icon?: ReactNode
  labelClassName?: string
  iconClassName?: string
  className?: string
  wrapperClassName?: string
  errorClassName?: string
  passwordIconClassName?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", error, icon = <Mail />, labelClassName = "", iconClassName = "", className = "", wrapperClassName = "", errorClassName = "", passwordIconClassName = "", onChange, ...rest }, ref) => {
    const [isShown, setIsShown] = useState(false)

    const handleClick = () => setIsShown(!isShown)

    // Determine the input type based on the isShown state
    const inputType = type === "password" && isShown ? "text" : type

    return (
      <fieldset className={cn('mb-4', wrapperClassName)}>
        {label && (
          <label className={cn('mb-1 block text-sm font-medium text-secondary-800 dark:text-secondary-200', labelClassName)}>
            {label}
          </label>
        )}
        <div className='relative'>
          {icon && (
            <div
              className={cn("pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 text-primary-800 dark:text-primary-200 peer-disabled:pointer-events-none peer-disabled:opacity-50", error ? "text-error-500 dark:text-error-500" : "", iconClassName)}
            >
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={inputType} // Use the determined input type
            className={cn("w-full rounded-md border bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 placeholder:text-secondary-500 px-3 py-2 shadow-sm focus-visible:border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-200 ps-11", type === 'password' && 'pe-11', error ? 'border-error-500' : 'border-gray-300', className)}
            onChange={(event) => {
              onChange?.(event)
            }}
            {...rest}
          />
          {type === "password" &&
            <Tooltip
              className={cn("absolute inset-y-0 end-0 flex items-center pe-4 cursor-pointer text-primary-800 dark:text-primary-200", passwordIconClassName ? passwordIconClassName : iconClassName)} contentClassName='text-sm text-nowrap'
              arrowColor='#847ef3'
            >
              <TooltipAction>
                <div onClick={handleClick}>
                  {isShown ? <Show /> : <Hide />}
                </div>
              </TooltipAction>
              <TooltipContent>
                {isShown ? "Show Password" : "Hide Password"}
              </TooltipContent>
            </Tooltip>
          }
        </div>
        {error && <p className={cn('mt-1 text-sm text-error-600', errorClassName)}>{error}</p>}
      </fieldset>
    )
  }
)

Input.displayName = 'Input'
