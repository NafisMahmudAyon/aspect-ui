'use client'

import React, { ReactNode } from 'react'
import { useAccordion } from './AccordionContext'
import { cn } from '../../utils/cn'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  rest?: React.SVGProps<SVGSVGElement>
  size?: number
}
const Up = ({ className = '', size = 24, ...rest }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        d="m5.996 14.996 6-6L18 15"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Down = ({ className = '', size = 24, ...rest }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        d="m18 9-6 6-6.004-6.004"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface AccordionHeaderProps {
  children: ReactNode
  isOpen?: boolean
  onToggle?: () => void
  iconEnabled?: boolean
  iconPosition?: 'left' | 'right'
  iconClassName?: string
  activeIconClassName?: string
  activeIcon?: ReactNode
  inactiveIcon?: ReactNode
  disabled?: boolean
  className?: string
  labelClassName?: string
  activeLabelClassName?: string
  headerClassName?: string
  activeHeaderClassName?: string
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  isOpen,
  onToggle,
  className = '',
  iconEnabled: headerIconEnabled,
  iconPosition: headerIconPosition,
  iconClassName: headerIconClassName,
  activeIconClassName: headerActiveIconClassName,
  activeIcon: headerActiveIcon,
  inactiveIcon: headerInactiveIcon,
  labelClassName: headerLabelClassName,
  activeLabelClassName: headerActiveLabelClassName,
  headerClassName: headerHeaderClassName,
  activeHeaderClassName: headerActiveHeaderClassName,
  disabled = false,
  ...rest
}) => {
  const {
    iconEnabled: accordionIconEnabled,
    iconPosition: accordionIconPosition,
    iconClassName: accordionIconClassName,
    activeIconClassName: accordionActiveIconClassName,
    activeIcon: accordionActiveIcon,
    inactiveIcon: accordionInactiveIcon,
    labelClassName: accordionLabelClassName,
    activeLabelClassName: accordionActiveLabelClassName,
    headerClassName: accordionHeaderClassName,
    activeHeaderClassName: accordionActiveHeaderClassName
  } = useAccordion()

  const iconEnabled = headerIconEnabled ?? accordionIconEnabled
  const iconPosition = headerIconPosition ?? accordionIconPosition
  const iconClassName = headerIconClassName ?? accordionIconClassName
  const activeIconClassName =
    headerActiveIconClassName ?? accordionActiveIconClassName
  const activeIcon = headerActiveIcon ?? accordionActiveIcon ?? <Up />
  const inactiveIcon = headerInactiveIcon ?? accordionInactiveIcon ?? <Down />

  const icon = isOpen ? activeIcon : inactiveIcon
  const iconClass = cn(iconClassName, isOpen ? activeIconClassName : '', 'transition-transform duration-300')

  const labelClassName = headerLabelClassName ?? accordionLabelClassName
  const activeLabelClassName =
    headerActiveLabelClassName ?? accordionActiveLabelClassName
  const headerClassName = headerHeaderClassName ?? accordionHeaderClassName
  const activeHeaderClassName =
    headerActiveHeaderClassName ?? accordionActiveHeaderClassName

  const labelClass = cn(labelClassName, isOpen ? activeLabelClassName : '')
  const headerClass = cn(headerClassName, isOpen ? activeHeaderClassName : '')
  return (
    <button
      className={cn(
        'flex w-full items-center justify-between p-4 text-left transition-all duration-150 ease-in-out',
        disabled
        ? ''
        : 'cursor-pointer hover:bg-primary-200 dark:hover:bg-primary-900',
        isOpen
        ? 'bg-primary-200 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
        : 'bg-primary-100 text-primary-900 dark:bg-primary-800 dark:text-primary-100',
        className,
        headerClass,
      )}
      onClick={onToggle}
      disabled={disabled} {...rest}
    >
      {iconEnabled && iconPosition === 'left' && (
        <span className={`${iconClass}`}>{icon}</span>
      )}
      <span className={`${labelClass} flex-grow`}>{children}</span>
      {iconEnabled && iconPosition === 'right' && (
        <span className={`${iconClass}`}>{icon}</span>
      )}
    </button>
  )
}
