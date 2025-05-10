'use client'
import { ReactNode } from 'react'
import ReactFocusLock from 'react-focus-lock'
import { useModal } from './ModalContext'
import { ModalOverlay } from './ModalOverlay'
import { Portal } from '../../utils/Portal'
import { RemoveScroll } from 'react-remove-scroll'

export const ModalPortal = ({ children,className }: { children: ReactNode,className?:string }) => {
  const { isOpen } = useModal()
  return (
    <Portal>
      <RemoveScroll enabled={isOpen}>
        <ReactFocusLock disabled={!isOpen} returnFocus>
          <ModalOverlay className={className}>{children}</ModalOverlay>
        </ReactFocusLock>
      </RemoveScroll>
    </Portal>
  )
}
