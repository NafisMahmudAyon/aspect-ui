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
      className={cn('my-2 grow space-y-1 overflow-y-auto', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
