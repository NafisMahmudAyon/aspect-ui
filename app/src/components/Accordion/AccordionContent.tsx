'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useAccordion } from './AccordionContext'

export interface AccordionContentProps {
  children: ReactNode
  isOpen?: boolean
  className?: string
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isOpen,
  className = '',
  ...rest
}) => {
  const { contentClassName: accordionContentClassName } = useAccordion()

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <div
            className={cn(
              'overflow-hidden border-t border-border bg-bg p-4 text-sm',
              accordionContentClassName,
              className
            )} {...rest}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
