'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TableHeaderProps {
  children: ReactNode
  className?: string
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <thead
      className={cn('[&_tr]:border-b-border [&_tr]:border-b', className)}
      {...rest}
    >
      {children}
    </thead>
  )
}
