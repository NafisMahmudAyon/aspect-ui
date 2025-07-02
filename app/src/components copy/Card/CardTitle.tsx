import { cn } from "../../utils/cn"

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <h3 className={cn(
      "text-lg font-semibold text-primary-800 dark:text-primary-200",
      className
    )} {...rest}>
      {children}
    </h3>
  )
}
