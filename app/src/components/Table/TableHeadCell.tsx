'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TableHeadCellProps {
  children: ReactNode
  className?: string
}

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
  children,
  className = ''
}) => {
  return (
    <th
      className={cn(
        "text-text h-10 px-2 text-left align-middle font-medium whitespace-nowrap",
        className
      )}
    >
      {children}
    </th>
  )
}
