// ./app/src/components/Navbar/NavbarCollapse.tsx
'use client'

import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import { useNavbar } from './NavbarContext'

type NavbarCollapseProps = HTMLAttributes<HTMLDivElement> & MotionProps

export const NavbarCollapseComponent = forwardRef<
  HTMLDivElement,
  NavbarCollapseProps
>(({ children, className, ...rest }, ref) => {
  const { isCollapsed } = useNavbar()

  return (
    <AnimatePresence>
      {!isCollapsed && (
        <motion.div
          initial={{ y: '20px', opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'anticipate' }}
          exit={{ opacity: 0, y: '20px' }}
          ref={ref}
          {...rest}
          className={cn(
            `bg-bg border-border absolute top-full right-0 left-0 z-[1000] rounded-md rounded-t-none border p-4 shadow-md ${isCollapsed ? 'hidden' : 'flex flex-col'}`,
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
})

NavbarCollapseComponent.displayName = 'NavbarCollapse'

export const NavbarCollapse = NavbarCollapseComponent
