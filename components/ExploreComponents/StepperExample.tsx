'use client'
import { Stepper, StepperItem, useStepper } from '@/app/src/components/Stepper'
import React from 'react'

const StepperExample = () => {
  const StepContent: React.FC = () => {
    const { activeStep } = useStepper()

    return (
      <div>
        <p>Current step: {activeStep + 1}</p>
      </div>
    )
  }
  return (
    <div className='w-full'>
      <Stepper initialStep={0}>
        <StepperItem icon={1} label='Step 1'>
          <StepContent />
        </StepperItem>
        <StepperItem icon={2} label='Step 2'>
          <StepContent />
        </StepperItem>
        <StepperItem icon={3} label='Step 3'>
          <StepContent />
        </StepperItem>
      </Stepper>
    </div>
  )
}

export default StepperExample