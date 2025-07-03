'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface DropdownListProps {
  children: ReactNode
  className?: string
}

export const DropdownList: React.FC<DropdownListProps> = ({ children, className = "", ...rest }) => {
  return <div className={cn('py-1 border-b last:border-b-0 border-border', className)} {...rest}>{children}</div>
}
