// ./app/src/components/Sidebar/SidebarFooter.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SidebarFooterProps {
  children: ReactNode
  className?: string
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cn(
        'border-border border-t-2 px-2.5 py-3 transition-all duration-200 ease-in-out',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
