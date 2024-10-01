// components/AccordionContent.tsx
import { ReactNode } from 'react'

export interface AccordionContentProps {
  isOpen?: boolean
  children?: ReactNode
  className?: string
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  isOpen,
  children,
  className
}) => {
  return (
    <div
      className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 p-4' : 'invisible max-h-0 p-0'} ${className}`}
    >
      {children}
    </div>
  )
}

export default AccordionContent
