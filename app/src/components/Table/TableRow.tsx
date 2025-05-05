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
  return <tr className={cn("data-[state=selected]:bg-primary-100 dark:border-b-primary-800 hover:bg-primary-100/50 dark:hover:bg-primary-800/50",className)}>{children}</tr>
}
