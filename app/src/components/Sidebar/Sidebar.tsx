// ./app/src/components/Sidebar/Sidebar.tsx
'use client'

import React, { ReactNode } from 'react'
// import { SidebarProvider } from './SidebarContext';

interface SidebarProps {
  children: ReactNode
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <>
      {/* <SidebarProvider> */}
      <aside className='flex h-screen w-64 flex-col bg-gray-800 text-white transition-all duration-300 ease-in-out'>
        {children}
      </aside>
      {/* </SidebarProvider> */}
    </>
  )
}
