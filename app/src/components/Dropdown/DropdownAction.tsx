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

export const DropdownAction: React.FC<DropdownActionProps> = ({ children, className = "", icon, iconPosition = "end", ...rest }) => {
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
  }, [direction]);

  return (
    <button
      type='button'
      className={cn('flex w-fit justify-center items-center gap-2 border border-border rounded-md bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border', className)}
      onClick={toggleDropdown}
      {...rest}
    >
      {iconPosition === 'start' && (icon || iconDefault)}
      {children}
      {iconPosition === 'end' && (icon ?? iconDefault)}
    </button>
  )
}