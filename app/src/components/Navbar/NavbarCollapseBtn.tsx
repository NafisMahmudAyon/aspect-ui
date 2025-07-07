// ./app/src/components/Navbar/NavbarCollapseBtn.tsx
'use client'
import React from 'react'
import { cn } from '../../utils/cn'
import { useNavbar } from './NavbarContext'

interface NavbarCollapseBtnProps {
  className?: string
  icon?: React.ReactNode // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
}

export const NavbarCollapseBtn: React.FC<NavbarCollapseBtnProps> = ({
  className = '',
  icon,
  ...rest
}) => {
  const { toggleCollapse, collapseBreakpoint } = useNavbar()

  return (
    <button
      className={cn(
        'text-text hover:bg-bg-light focus-visible:ring-border focus-visible:bg-bg-light rounded-md p-2 focus-visible:ring-2 focus-visible:outline-hidden',
        `block ${collapseBreakpoint === 'sm' && 'sm:hidden'} ${collapseBreakpoint === 'md' && 'md:hidden'} ${collapseBreakpoint === 'lg' && 'lg:hidden'} ${collapseBreakpoint === 'xl' && 'xl:hidden'} ${collapseBreakpoint === '2xl' && '2xl:hidden'}`,
        className
      )}
      onClick={toggleCollapse}
      {...rest}
    >
      {icon ? (
        icon
      ) : (
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      )}
    </button>
  )
}
