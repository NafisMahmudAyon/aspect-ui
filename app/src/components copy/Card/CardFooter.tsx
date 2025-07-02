import { cn } from "../../utils/cn"

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return <div className={cn(className)} {...rest}>{children}</div>
}
