// ./app/src/components/Sidebar/SidebarItem.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useSidebar } from './SidebarContext'

interface SidebarItemProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  onClick,
  className = '',
  ...rest
}) => {
  const { toggleSidebar } = useSidebar()
  return (
    <div
      className={cn(
        'text-body1 hover:bg-bg-light text-text flex cursor-pointer items-center gap-3 rounded-md p-2.5 font-normal transition-all duration-150 ease-in-out',
        className
      )}
      onClick={()=>{
        toggleSidebar()
        onClick?.()
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
