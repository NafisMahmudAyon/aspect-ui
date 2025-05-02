'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TableRowProps {
  children: ReactNode
  className?: string
}

export const TableRow: React.FC<TableRowProps> = ({
  children,
  className = ''
}) => {
  return <tr className={cn("hover:bg-primary-100 data-[state=selected]:bg-primary-100 dark:border-b-primary-800 dark:hover:bg-primary-800",className)}>{children}</tr>
}
