'use client'

import React, { ReactNode, useState } from 'react'
import { cn } from '../../utils/cn'
import { AccordionProvider } from './AccordionContext'

interface AccordionProps {
  children: ReactNode
  iconEnabled?: boolean
  iconPosition?: 'left' | 'right'
  iconClassName?: string
  activeIconClassName?: string
  activeItem?: string[]
  activeIcon?: ReactNode
  inactiveIcon?: ReactNode
  multiple?: boolean
  className?: string
  labelClassName?: string
  activeLabelClassName?: string
  headerClassName?: string
  activeHeaderClassName?: string
  contentClassName?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  iconEnabled = true,
  iconPosition = 'right',
  iconClassName = '',
  activeItem,
  activeIconClassName = '',
  activeIcon,
  inactiveIcon,
  multiple = false,
  className = '',
  labelClassName = '',
  activeLabelClassName = '',
  headerClassName = '',
  activeHeaderClassName = '',
  contentClassName = '',
  ...rest
}) => {
  const [openItems, setOpenItems] = useState<string[]>(activeItem ?? [])

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId)
      } else {
        return multiple ? [...prev, itemId] : [itemId]
      }
    })
  }

  return (
    <AccordionProvider
      value={{
        openItems,
        toggleItem,
        iconEnabled,
        iconPosition,
        iconClassName,
        activeIconClassName,
        activeIcon,
        inactiveIcon,
        labelClassName,
        activeLabelClassName,
        headerClassName,
        activeHeaderClassName,
        contentClassName,
      }}
    >
      <div className={cn('space-y-2', className)} {...rest}>{children}</div>
    </AccordionProvider>
  )
}
