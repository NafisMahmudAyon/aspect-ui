'use client'

import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import { cn } from '../../utils/cn'
import { useDropdown } from './DropdownContext'

interface DropdownActionProps {
  children: ReactNode
  className?: string
  icon?: ReactElement
  iconPosition?: 'start' | 'end'
}

export const DropdownAction: React.FC<DropdownActionProps> = ({
  children,
  className = '',
  icon,
  iconPosition = 'end',
  ...rest
}) => {
  const { toggleDropdown, direction } = useDropdown()
  const [iconDefault, setIconDefault] = useState(<ChevronDown />)
  useEffect(() => {
    if (direction == 'top') {
      setIconDefault(<ChevronUp />)
    }
    if (direction == 'left') {
      setIconDefault(<ChevronLeft />)
    }
    if (direction == 'right') {
      setIconDefault(<ChevronRight />)
    }
  }, [direction])

  return (
    <button
      type='button'
      className={cn(
        'border-border focus-visible:ring-border flex w-fit items-center justify-center gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus-visible:ring-2 focus-visible:outline-hidden',
        className
      )}
      onClick={toggleDropdown}
      {...rest}
    >
      {iconPosition === 'start' && (icon || iconDefault)}
      {children}
      {iconPosition === 'end' && (icon ?? iconDefault)}
    </button>
  )
}
