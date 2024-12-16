'use client'

import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import { useDropdown } from './DropdownContext'
import { cn } from '../../utils/cn'
import { Down, Left, Right, Up } from '../Icon/Arrow'

interface DropdownActionProps {
  children: ReactNode
  className?: string
  icon?: ReactElement<any>
  iconPosition?: 'start' | 'end'
}

export const DropdownAction: React.FC<DropdownActionProps> = ({ children, className = "", icon, iconPosition = "end", ...rest }) => {
  const { toggleDropdown, direction } = useDropdown()
  const [iconDefault, setIconDefault] = useState(<Down />)
  useEffect(() => {
    if (direction == 'top') {
      setIconDefault(<Up />)
    }
    if (direction == 'left') {
      setIconDefault(<Left />)
    }
    if (direction == 'right') {
      setIconDefault(<Right />)
    }
  }, [direction]);

  return (
    <button
      type='button'
      className={cn('inline-flex w-full justify-center rounded-md bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 px-4 py-2 font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100', className)}
      onClick={toggleDropdown}
      {...rest}
    >
      {iconPosition === 'start' && (icon || iconDefault)}
      {children}
      {iconPosition === 'end' && (icon ?? iconDefault)}
    </button>
  )
}