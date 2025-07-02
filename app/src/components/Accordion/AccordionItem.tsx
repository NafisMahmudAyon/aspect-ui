'use client'

import React, { ReactNode, cloneElement, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import { useAccordion } from './AccordionContext'

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
        'overflow-hidden rounded-md border border-border',
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
