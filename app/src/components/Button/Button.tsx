import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'link'
    | 'outline'
    | 'ghost'
    | 'icon'
    | 'withIcon'
    | 'default'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children?: ReactNode
  icon?: ReactNode
  className?: string
  iconClassName?: string
  iconPosition?: 'left' | 'right'
  position?: 'bottom-right' | 'bottom-left'
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'default',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  children,
  icon,
  iconPosition = 'left',
  className = '',
  iconClassName = '',
  ...rest
}) => {
  const baseStyles = `inline-flex gap-2 items-center justify-center font-medium rounded-md focus:outline-hidden focus-visible:border-ring focus-visible:ring-border transition ease-in-out duration-200 focus-visible:ring-1 cursor-pointer`

  const sizeStyles = {
    small: `${variant == 'link' ? '' : 'px-3 py-2'} text-sm`,
    medium: `${variant == 'link' ? '' : 'px-4 py-2'} text-base`,
    large: `${variant == 'link' ? '' : 'px-6 py-3'} text-lg`
  }

  const variantStyles = {
    default: `
      bg-bg text-text hover:bg-primary/90
    `,
    primary: `
      bg-primary text-primary-foreground hover:bg-primary/90
    `,
    secondary: `
      bg-bg-light text-text
    `,
    success: `
      bg-success text-text
    `,
    warning: `
      bg-warning text-text
    `,
    link: `
      text-text hover:underline underline-offset-4
    `,
    outline: `
      border border-border text-text bg-bg-light/30 hover:bg-bg-light/60
    `,
    ghost: `
      hover:bg-bg-light hover:text-text
    `,
    icon: `
      bg-bg-light text-text hover:bg-bg-light/60
    `,
    withIcon: `
      bg-bg-light text-text hover:bg-bg-light/60
    `
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        disabled ? 'pointer-events-none opacity-50' : '',
        loading ? 'relative' : '',
        'font-sans',
        className
      )}
      {...rest}
    >
      {loading && (
        <span className=''>
          <svg
            className='h-5 w-5 animate-spin'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12zm2 5.291A7.96 7.96 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938z'
            />
          </svg>
        </span>
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className={`${iconClassName}`}>{icon}</span>
      )}
      {!loading && children}
      {icon && iconPosition === 'right' && !loading && (
        <span className={`${iconClassName}`}>{icon}</span>
      )}
    </button>
  )
}
