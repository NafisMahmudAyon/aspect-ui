'use client'


import { Popover } from '@/app/src/components/Popover'
import React, { useState } from 'react'

const PopoverDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='mx-auto max-w-sm'>
      <button onClick={() => setIsOpen(!isOpen)}>OPEN</button>
      <Popover isOpen={isOpen} className='text-black pl-10 bg-gray-400' content={<div>
        Lorem, ipsum dolor sit amet
      </div>} />
      
    </div>
  )
}

export default PopoverDemo