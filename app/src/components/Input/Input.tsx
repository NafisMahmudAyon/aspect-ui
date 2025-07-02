// ./app/src/components/Input/Input.tsx

'use client'

import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react'
import { cn } from '../../utils/cn'
import { Hide, Mail, Show } from '../Icon/Form'
import { Tooltip, TooltipAction, TooltipContent } from '../Tooltip'

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
  ({ label, type = "text", error, icon = <Mail />, labelClassName = "", iconClassName = "", className = "", wrapperClassName = "", errorClassName = "", passwordIconClassName = "", onChange, disabled = false, ...rest }, ref) => {
    const [isShown, setIsShown] = useState(false)

    const handleClick = () => setIsShown(!isShown)

    // Determine the input type based on the isShown state
    const inputType = type === "password" && isShown ? "text" : type

    return (
      <fieldset className={cn('mb-4', wrapperClassName)}>
        {label && (
          <label className={cn('mb-1 block text-sm font-medium text-text', disabled
            && "opacity-50 pointer-events-none", labelClassName)}>
            {label}
          </label>
        )}
        <div className='relative'>
          {icon && (
            <div
              className={cn("pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 text-text", disabled ? 'opacity-50 pointer-events-none' : "", error ? "text-error-500 dark:text-error-500" : "", iconClassName)}
            >
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={inputType} // Use the determined input type
            className={cn("w-full rounded-md border placeholder:text-text-muted px-3 py-2 shadow-xs selection:bg-primary selection:text-primary-foreground focus-visible:border-border focus:outline-hidden focus:ring-2 focus:ring-border ps-11", type === 'password' && 'pe-11', error ? 'border-error-500' : 'border-border', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', disabled ? 'opacity-50 pointer-events-none' : "", className)}
            onChange={(event) => {
              onChange?.(event)
            }}
            {...rest}
          />
          {type === "password" &&
            <Tooltip>
              <TooltipAction className={cn("absolute inset-y-0 end-0 flex items-center me-4 cursor-pointer text-text", passwordIconClassName ? passwordIconClassName : iconClassName)}>
                <div onClick={handleClick}>
                  {isShown ? <Show /> : <Hide />}
                </div>
              </TooltipAction>
              <TooltipContent className='text-sm text-nowrap'>
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
