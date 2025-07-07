import { cn } from '../../utils/cn'

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <p className={cn('text-text-muted text-sm', className)} {...rest}>
      {children}
    </p>
  )
}
