import {
  Sidebar,
  SidebarContainer,
  SidebarFooter,
  SidebarHeader,
  SidebarItem
} from '@/app/src/components/Sidebar'
import React from 'react'
import Dark from '../Dark'

const SidebarDemo = () => {
  return (
    <div>
      <Sidebar>
        <SidebarHeader>
          <Dark />
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
    </div>
  )
}

export default SidebarDemo
