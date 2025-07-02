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
  return <tr className={cn("hover:bg-bg-light/50 border-b border-b-border transition-colors", className)}>{children}</tr>
}
