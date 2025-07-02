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
    <tbody className={cn("divide-y  divide-primary-50 border-b border-b-primary-50", className)}>
      {children}
    </tbody>
  )
}
