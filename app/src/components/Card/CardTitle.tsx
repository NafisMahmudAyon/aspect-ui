import { cn } from '../../utils/cn'

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
      "leading-none font-semibold",
      className
    )} {...rest}>
      {children}
    </h3>
  )
}
