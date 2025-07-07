'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TabListProps {
  children: ReactNode
  className?: string
}

export const TabList: React.FC<TabListProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cn(
        'bg-bg text-text mb-4 inline-flex items-center space-x-2 rounded-md p-[3px]',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
