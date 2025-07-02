'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TabListProps {
  children: ReactNode
  className?: string
}

export const TabList: React.FC<TabListProps> = ({ children, className="", ...rest }) => {
  return <div className={cn('mb-4 flex space-x-2',className)} {...rest}>{children}</div>
}
