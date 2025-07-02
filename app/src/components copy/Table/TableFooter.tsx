'use client'

import React, { ReactNode } from 'react'

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
    <tfoot className={`border-t  font-medium last:[&>tr]:border-b-0 ${className}`} {...rest}>
      {children}
    </tfoot>
  )
}
