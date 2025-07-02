import { cn } from '../../utils/cn'

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return <div className={cn('px-6', className)} {...rest}>{children}</div>
}
