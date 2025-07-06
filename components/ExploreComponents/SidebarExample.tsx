import { Sidebar, SidebarContainer, SidebarFooter, SidebarHeader, SidebarItem, SidebarProvider } from '@/app/src'
import React from 'react'

const SidebarExample = () => {
  return (
    <div>
      <SidebarProvider>
      <Sidebar className='h-[500px]'>
        <SidebarHeader>
          <h2 className='text-xl font-bold'>My App</h2>
        </SidebarHeader>
        <SidebarContainer>
          <SidebarItem>Dashboard</SidebarItem>
          <SidebarItem>Profile</SidebarItem>
          <SidebarItem>Settings</SidebarItem>
        </SidebarContainer>
        <SidebarFooter>
          <p>© 2024 My App</p>
        </SidebarFooter>
      </Sidebar>
      </SidebarProvider>
    </div>
  )
}

export default SidebarExample