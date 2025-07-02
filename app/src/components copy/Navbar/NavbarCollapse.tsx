// ./app/src/components/Navbar/NavbarCollapse.tsx
'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { useNavbar } from './NavbarContext'
import { cn } from '../../utils/cn'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'


type NavbarCollapseProps = HTMLAttributes<HTMLDivElement> & MotionProps

export const NavbarCollapse = forwardRef<HTMLDivElement, NavbarCollapseProps>(({ children, className, ...rest }, ref) => {
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
            `absolute left-0 right-0 top-full z-20 bg-primary-100 dark:bg-primary-900 p-4 rounded-md border border-primary-200 dark:border-primary-800 ${isCollapsed ? 'hidden' : 'flex flex-col'}`,
            className
          )}
        >

          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
})
