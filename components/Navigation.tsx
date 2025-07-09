'use client'
import { Navbar as Nav, NavbarCollapseBtn, NavbarContainer, NavbarList } from '@/app/src'
import { usePathname } from 'next/navigation'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import SearchAction from './SearchAction'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
  const pathname = usePathname()
  if (pathname.match('/examples')) {
    return (<></>)
  }
  return (
    <header
      className={`fixed top-0 z-[1000] w-full border-b border-primary text-primary-foreground backdrop-blur-md `}>
      <div className="relative mx-auto max-w-7xl px-1 lg:px-6 2xl:px-0">
        <Nav className="flex items-center justify-between shadow-none bg-transparent" collapseBreakpoint='lg'>
          <NavbarContainer>
            <DesktopMenu />
            <div className='flex items-center gap-2'>
              <SearchAction />
              <ThemeSwitcher />
              <NavbarCollapseBtn />
            </div>
            <MobileMenu />
          </NavbarContainer>
        </Nav>
      </div>
    </header>
  )
}

export default Navbar