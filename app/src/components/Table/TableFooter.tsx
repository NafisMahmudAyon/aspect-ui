'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
  className?: string
}

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <tfoot className={cn(
      "bg-bg-light/50 border-t border-t-border font-medium [&>tr]:last:border-b-0",
      className
    )} {...rest}>
      {children}
    </tfoot>
  )
}
