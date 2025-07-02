import { cn } from "../../utils/cn"

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return <p className={cn("text-sm text-primary-800 dark:text-primary-200", className,)
} {...rest}>{children}</p>
}
