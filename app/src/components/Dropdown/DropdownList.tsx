'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface DropdownListProps {
  children: ReactNode
  className?: string
}

export const DropdownList: React.FC<DropdownListProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cn('border-border border-b py-1 last:border-b-0', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
