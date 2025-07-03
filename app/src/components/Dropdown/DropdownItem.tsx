'use client'
import { ReactNode } from "react"
import { cn } from '../../utils/cn'
import { useDropdown } from "./DropdownContext"

interface DropdownItemProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  activeClassName?: string
  isSelected?: boolean
  isLink?: boolean
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  className = '',
  activeClassName = '',
  onClick,
  isSelected = false,
  isLink = false,
  ...rest
}) => {
  const { closeDropdown } = useDropdown()

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    closeDropdown()
  }
  if (isLink === true) {
    return (
      <a
        href='#'
        className={cn('block px-4 py-2 text-sm text-nowrap hover:bg-bg-light/80', className, isSelected ? cn("bg-bg-light", activeClassName) : '')}
        role='option'
        area-selected={isSelected}
        onClick={handleClick}
        data-selected={isSelected}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <div
      className={cn('block px-4 py-2 text-sm text-nowrap hover:bg-bg-light/80', className, isSelected ? cn("bg-bg-light", activeClassName) : '')}
      are-selected={isSelected}
      role='option'
      onClick={handleClick}
      data-selected={isSelected}
      {...rest}
    >
      {children}
    </div>
  )
}
