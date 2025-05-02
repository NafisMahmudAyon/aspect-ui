'use client'
import { usePathname } from 'next/navigation'
import DesktopMenu from './DesktopMenu'
import { Navbar as Nav, NavbarCollapseBtn, NavbarContainer } from '@/app/src'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const pathname = usePathname()
  if (pathname.match('/examples')) {
    return (<></>)
  }
  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-primary-100 bg-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-100 ${pathname === '/' ? 'dark:bg-primary-900' : 'dark:bg-primary-900'}`}>
      <div className="relative mx-auto max-w-7xl px-6 2xl:px-0">
        <Nav className="flex items-center justify-between shadow-none">
          <NavbarContainer>
            <DesktopMenu />
            <NavbarCollapseBtn />
            <MobileMenu />
          </NavbarContainer>
        </Nav>
      </div>
    </header>
  )
}

export default Navbar
