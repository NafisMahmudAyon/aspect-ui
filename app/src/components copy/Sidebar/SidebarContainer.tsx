// ./app/src/components/Sidebar/SidebarContainer.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SidebarContainerProps {
  children: ReactNode
  className?: string
}

export const SidebarContainer: React.FC<SidebarContainerProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cn('grow overflow-y-auto my-2 space-y-1', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
