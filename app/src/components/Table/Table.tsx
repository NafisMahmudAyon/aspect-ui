'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { TableProvider } from './TableContext'

interface TableProps {
  children: ReactNode
  className?: string
}

export const Table: React.FC<TableProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <TableProvider>
      <div className='relative w-full overflow-auto'>
        <table className={cn('relative w-full', className)} {...rest}>
          {children}
        </table>
      </div>
    </TableProvider>
  )
}
