import { Navbar, NavbarCollapse, NavbarCollapseBtn, NavbarContainer, NavbarItem, NavbarList, Skeleton } from '@/app/src'

const NavbarExample = () => {
  return (
    <div className='w-full'>
      <Navbar collapseBreakpoint='md'>
        <NavbarContainer>
          <div className='flex items-center'>
            <h1 className='text-xl font-bold'>Logo</h1>
          </div>
          <NavbarList>
            <NavbarItem>
              <Skeleton variation='text' width='80px' className='bg-gray-400 dark:bg-gray-500' />
            </NavbarItem>
            <NavbarItem>
              <Skeleton variation='text' width='100px' className='bg-gray-400 dark:bg-gray-500' />
            </NavbarItem>
            <NavbarItem>
              <Skeleton variation='text' width='80px' className='bg-gray-400 dark:bg-gray-500' />
            </NavbarItem>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>
              <Skeleton variation='text' width='80px' className='bg-gray-400 dark:bg-gray-500' />
            </NavbarItem>
            <NavbarItem>
              <Skeleton variation='text' width='100px' className='bg-gray-400 dark:bg-gray-500' />
            </NavbarItem>
            <NavbarItem>
              <Skeleton variation='text' width='80px' className='bg-gray-400 dark:bg-gray-500' />
            </NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </div>
  )
}

export default NavbarExample