import { NavbarCollapse, NavbarItem, NavbarList } from '@/app/src'
import { navbarRoutes } from '@/routes/routes'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

const MobileMenu = () => {
  return (
    <NavbarCollapse className='gap-4'>


      {/* <NavbarList className='flex flex-col gap-2 items-start'> */}
        {navbarRoutes.map((nav) => (
          <NavbarItem key={nav.id}>
            <Link href={nav.href} target='_self' className='text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-50'>
              {nav.name}
            </Link>
          </NavbarItem>
        ))}
        {/* <li className='hover:text-primary-900 dark:hover:text-primary-50'>Documentation</li>
              <li className='hover:text-primary-900 dark:hover:text-primary-50'>Variations</li>
              <li className='hover:text-primary-900 dark:hover:text-primary-50'>Template</li>
              <li className='hover:text-primary-900 dark:hover:text-primary-50'>Full Page</li> */}
      {/* </NavbarList> */}
      <NavbarList className='flex items-center'>
        <ThemeSwitcher />
      </NavbarList>

    </NavbarCollapse>
  )
}

export default MobileMenu