// ./app/src/components/Sidebar/Sidebar.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
// import { SidebarProvider } from './SidebarContext';

interface SidebarProps {
  children: ReactNode
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ children, className = "", ...rest }) => {
  return (
    <>
      {/* <SidebarProvider> */}
      <aside className={cn('flex h-screen w-64 flex-col p-5 bg-bg transition-all duration-300 ease-in-out', className)} {...rest}>
        {children}
      </aside>
      {/* </SidebarProvider> */}
    </>
  )
}
