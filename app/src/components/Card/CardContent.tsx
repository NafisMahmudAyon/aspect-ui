import { cn } from "../../utils/cn"

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return <div className={cn('py-4',className)} {...rest}>{children}</div>
}
