import {
  Sidebar,
  SidebarContainer,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarToggleButton
} from '@/app/src/components/Sidebar'
import Dark from '../Dark'
import { SidebarProvider } from '@/app/src/components/Sidebar'

const SidebarDemo = () => {
  return (
    <div>
      <SidebarProvider>

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
        <SidebarToggleButton />
      </SidebarProvider>
    </div>
  )
}

export default SidebarDemo
