'use client'

import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { forwardRef, HTMLAttributes, Ref } from 'react'
import { cn } from '../../utils/cn'
import { useModal } from './ModalContext'
import { ModalPortal } from './ModalPortal'

type ModalContentProps = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    overlayClassName?: string
  }

const ModalContentComponent = forwardRef<HTMLDivElement, ModalContentProps>(
  (
    { children, className = '', overlayClassName = '', ...rest },
    ref: Ref<HTMLDivElement>
  ) => {
    const { isOpen } = useModal()
    if (!isOpen) return null

    return (
      <AnimatePresence>
        <ModalPortal overlayClassName={overlayClassName}>
          <motion.div
            className={cn(
              'aspect-ui-modal bg-bg border-border max-w-[calc(100%-2rem)] rounded-lg border p-4 shadow-lg',
              className
            )}
            {...rest}
            ref={ref}
            initial={{ scale: 0.5, opacity: 0, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.3,
              type: 'spring',
              damping: 25,
              stiffness: 500
            }}
            exit={{ opacity: 0.5, scale: 0.5, y: 40 }}
          >
            {children}
          </motion.div>
        </ModalPortal>
      </AnimatePresence>
    )
  }
)

ModalContentComponent.displayName = 'ModalContent'

export const ModalContent = ModalContentComponent
