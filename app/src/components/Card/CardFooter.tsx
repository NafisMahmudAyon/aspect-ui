import { cn } from '../../utils/cn'

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return <div className={cn('px-6 flex items-center', className)} {...rest}>{children}</div>
}
