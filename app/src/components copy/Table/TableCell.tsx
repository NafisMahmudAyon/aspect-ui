'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  className?: string
  colSpan?: number
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className = '',
  colSpan,
  ...rest
}) => {
  return (
    <td
      className={cn("px-6 py-3 align-middle text-body2 font-medium text-primary-800 dark:text-primary-100 [&:has([role=checkbox])]:pr-0", className)}
      colSpan={colSpan}
      {...rest}
    >
      {children}
    </td>
  )
}
