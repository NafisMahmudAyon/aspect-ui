import { NavbarList } from '@/app/src'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
import Image from 'next/image'
import AspectLogo from '../public/SVG/aspectLogo.svg'
import AspectDarkLogo from '../public/SVG/aspectDarkLogo.svg'
import { navbarRoutes } from '@/routes/routes'

const DesktopMenu = () => {
  return (
    <>
      <Link href="/" className="flex">
        <Image src={AspectLogo} width={150} alt="Keep React"  className="block dark:hidden" />
        <Image src={AspectDarkLogo} alt="Keep React" width={150} className="hidden dark:block" />
      </Link>
      <NavbarList>
        {navbarRoutes.map((nav)=>(
          <Link key={nav.id} href={nav.href} target='_self' className='text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-50'>
            {nav.name}
          </Link>
        ))}
        {/* <li className='hover:text-primary-900 dark:hover:text-primary-50'>Documentation</li>
        <li className='hover:text-primary-900 dark:hover:text-primary-50'>Variations</li>
        <li className='hover:text-primary-900 dark:hover:text-primary-50'>Template</li>
        <li className='hover:text-primary-900 dark:hover:text-primary-50'>Full Page</li> */}
      </NavbarList>
      <NavbarList>
        <ThemeSwitcher />
      </NavbarList>
    </>
  )
}

export default DesktopMenu