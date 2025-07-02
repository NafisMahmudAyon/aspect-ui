'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TabListProps {
  children: ReactNode
  className?: string
}

export const TabList: React.FC<TabListProps> = ({ children, className = "", ...rest }) => {
  return <div className={cn('mb-4 space-x-2 bg-bg text-text rounded-md p-[3px] inline-flex items-center', className)} {...rest}>{children}</div>
}
