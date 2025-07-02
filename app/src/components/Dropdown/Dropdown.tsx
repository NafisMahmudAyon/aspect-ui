'use client'

import React, {
  ReactNode,
  useState,
  useCallback,
  useRef,
  useEffect
} from 'react'
import { DropdownProvider } from './DropdownContext'

type Direction =
  | 'bottom'
  | 'top'
  | 'left'
  | 'right'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-right'
  | 'top-left'

interface DropdownProps {
  children: ReactNode
  hover?: boolean
  hoverDelay?: number
  closeDelay?: number
  direction?: Direction
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  hover = false,
  hoverDelay = 0,
  closeDelay = 100,
  direction = 'bottom'
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const openDropdown = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsOpen(true), hoverDelay)
  }, [hoverDelay])

  const closeDropdown = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsOpen(false), closeDelay)
  }, [closeDelay])

  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const getPositionClass = () => {
    switch (direction) {
      case 'top':
        return 'bottom-full mb-2'
      case 'left':
        return 'right-full mr-2 top-0'
      case 'right':
        return 'left-full top-0 ml-2'
      case 'bottom-right':
        return 'top-full left-0 mt-2'
      case 'bottom-left':
        return 'top-full right-0 mt-2'
      case 'top-right':
        return 'bottom-full left-0 mb-2'
      case 'top-left':
        return 'bottom-full right-0 mb-2'
      default:
        return 'top-full left-0 mt-2' // bottom (default)
    }
  }

  return (
    <DropdownProvider
      value={{
        isOpen,
        toggleDropdown: !hover ? toggleDropdown : () => {},
        closeDropdown: !hover ? closeDropdown : () => {},
        direction,
        positionClass: getPositionClass()
      }}
    >
      <div
        className='relative inline-block text-left'
        {...(hover
          ? { onMouseEnter: openDropdown, onMouseLeave: closeDropdown }
          : {})}
        ref={dropdownRef}
      >
        {children}
      </div>
    </DropdownProvider>
  )
}
