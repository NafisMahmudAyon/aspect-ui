'use client'
import React, {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react'

interface StepperContextType {
  activeStep: number
  setActiveStep: (step: number) => void
  totalSteps: number
}

const StepperContext = createContext<StepperContextType | undefined>(undefined)

interface StepperProps {
  children: ReactElement<StepperItemProps>[]
  initialStep?: number
}

interface StepperItemProps {
  icon: ReactNode
  label: string
  children?: ReactNode
  index?: number
}

const Stepper: React.FC<StepperProps> = ({ children, initialStep = 0 }) => {
  const [activeStep, setActiveStep] = useState(initialStep)

  const contextValue: StepperContextType = {
    activeStep,
    setActiveStep,
    totalSteps: React.Children.count(children)
  }

  return (
    <StepperContext.Provider value={contextValue}>
      <div className='flex items-center'>
        {React.Children.map(children, (child, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div
                className={`mx-2 h-0.5 grow ${
                  index <= activeStep ? 'bg-primary' : 'bg-bg'
                }`}
              />
            )}
            {React.cloneElement(child, {
              ...child.props,
              index
            })}
          </React.Fragment>
        ))}
      </div>
    </StepperContext.Provider>
  )
}

const StepperItem: React.FC<StepperItemProps & { index?: number }> = ({
  icon,
  label,
  children,
  index
}) => {
  const context = useContext(StepperContext)
  if (!context) {
    throw new Error('StepperItem must be used within a Stepper')
  }

  const { activeStep, setActiveStep } = context
  const completed = index !== undefined && index < activeStep
  const active = index === activeStep

  const getStateStyles = () => {
    if (completed) return 'bg-primary text-primary-foreground'
    if (active) return 'border-primary text-text'
    return 'bg-bg border-border text-text-muted'
  }

  const handleClick = () => {
    if (index !== undefined) {
      setActiveStep(index)
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${getStateStyles()} cursor-pointer`}
        onClick={handleClick}
      >
        {completed ? '✓' : icon}
      </div>
      <p
        className={`mt-2 text-sm ${active ? 'text-text font-medium' : 'text-text-muted'}`}
      >
        {label}
      </p>
      {children && <div className='mt-2'>{children}</div>}
    </div>
  )
}

// Custom hook to access the Stepper context
const useStepper = () => {
  const context = useContext(StepperContext)
  if (!context) {
    throw new Error('useStepper must be used within a Stepper')
  }
  return context
}

export { Stepper, StepperItem, useStepper }
