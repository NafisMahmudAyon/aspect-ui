'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface DropdownListProps {
  children: ReactNode
  className?: string
}

export const DropdownList: React.FC<DropdownListProps> = ({ children, className="", ...rest }) => {
  return <div className={cn('py-1 border border-primary-50 dark:border-primary-950 rounded-md shadow-lg bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 ', className)} {...rest}>{children}</div>
}
