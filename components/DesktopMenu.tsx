import { NavbarList } from '@/app/src'
import { navbarRoutes } from '@/routes/routes'
// import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import AspectDarkLogo from '../public/SVG/aspectDarkLogo.svg'
import AspectLogo from '../public/SVG/aspectLogo.svg'
import ThemeSwitcher from './ThemeSwitcher'
import SearchAction from './SearchAction'
// import UserButton from './UserButton'

const DesktopMenu = () => {
  return (
    <>
      <Link href="/" className="flex">
        <Image src={AspectLogo} width={150} alt="Aspect Logo" className="block dark:hidden" />
        <Image src={AspectDarkLogo} alt="Aspect Logo" width={150} className="hidden dark:block" />
      </Link>
      <NavbarList>
        {navbarRoutes.map((nav) => (
          <Link key={nav.id} href={nav.href} target='_self' className='text-text hover:text-primary-foreground'>
            {nav.name}
          </Link>
        ))}
        {/* <li className='hover:text-primary-900 dark:hover:text-primary-50'>Documentation</li>
        <li className='hover:text-primary-900 dark:hover:text-primary-50'>Variations</li>
        <li className='hover:text-primary-900 dark:hover:text-primary-50'>Template</li>
        <li className='hover:text-primary-900 dark:hover:text-primary-50'>Full Page</li> */}
      </NavbarList>
      <NavbarList>
        <SearchAction />
        <ThemeSwitcher />
        {/* <UserButton /> */}
      </NavbarList>
    </>
  )
}

export default DesktopMenu