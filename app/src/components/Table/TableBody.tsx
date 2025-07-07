'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TableBodyProps {
  children: ReactNode
  className?: string
}

export const TableBody: React.FC<TableBodyProps> = ({
  children,
  className = ''
}) => {
  return (
    <tbody className={cn('[&_tr:last-child]:border-0', className)}>
      {children}
    </tbody>
  )
}
