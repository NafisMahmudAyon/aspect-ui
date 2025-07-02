'use client'

import React, { ReactNode, isValidElement, cloneElement } from 'react'
import { useAccordion } from './AccordionContext'
import { cn } from '../../utils/cn'

interface AccordionItemProps {
  children: ReactNode
  id: string
  disabled?: boolean
  className?: string
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  id,
  disabled = false,
  className = '',
  ...rest
}) => {
  const { openItems, toggleItem } = useAccordion()
  const isOpen = openItems.includes(id)

  return (
    <div
      className={cn(
        'overflow-hidden rounded-md border',
        isOpen
          ? 'border-primary-900 dark:border-primary-100'
          : 'border-primary-800 dark:border-primary-100',
        disabled ? 'opacity-50' : '',
        className
      )} {...rest}
    >
      {React.Children.map(children, child => {
        if (isValidElement(child)) {
          const childProps: any = {
            isOpen,
            onToggle: disabled ? undefined : () => toggleItem(id),
            disabled
          }
          return cloneElement(child, childProps)
        }
        return child
      })}
    </div>
  )
}
