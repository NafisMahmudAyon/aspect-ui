// ./app/src/components/Sidebar/SidebarHeader.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SidebarHeaderProps {
  children: ReactNode
  className?: string
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cn(
        'border-border text-text border-b-2 px-2.5 py-3 transition-all duration-200 ease-in-out',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
