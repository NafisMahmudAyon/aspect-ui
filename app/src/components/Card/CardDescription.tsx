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
  return <p className={cn("text-sm text-text-muted", className,)
  } {...rest}>{children}</p>
}
