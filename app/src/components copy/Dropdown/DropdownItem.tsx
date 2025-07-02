import { ReactNode } from "react"
import { cn } from "../../utils/cn"
import { useDropdown } from "./DropdownContext"

interface DropdownItemProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  activeClassName?: string
  isSelected?: boolean
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  className = '',
  activeClassName = '',
  onClick,
  isSelected = false,
  ...rest
}) => {
  const { closeDropdown } = useDropdown()

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    closeDropdown()
  }

  return (
    <a
      href='#'
      className={cn('block px-4 py-2 text-sm bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 text-nowrap', className, isSelected ? activeClassName : '')}
      role='menuitem'
      onClick={handleClick}
      data-selected={isSelected}
      {...rest}
    >
      {children}
    </a>
  )
}
