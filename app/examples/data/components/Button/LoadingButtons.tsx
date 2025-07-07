'use client'
import { Button } from '@/app/src'
import { Save, Send } from 'lucide-react'
import { useState } from 'react'

export default function LoadingButtons() {
  const [isLoading1, setIsLoading1] = useState(false)
  const [isLoading2, setIsLoading2] = useState(false)

  const handleClick1 = () => {
    setIsLoading1(true)
    setTimeout(() => {
      setIsLoading1(false)
    }, 2000)
  }

  const handleClick2 = () => {
    setIsLoading2(true)
    setTimeout(() => {
      setIsLoading2(false)
    }, 2000)
  }

  return (
    <div className='flex flex-wrap gap-4'>
      <Button
        loading={isLoading1}
        onClick={handleClick1}
        icon={<Send className='size-6' />}
      >
        {isLoading1 ? 'Loading...' : 'Send'}
      </Button>
      <Button
        loading={isLoading2}
        onClick={handleClick2}
        icon={<Save className='size-6' />}
      >
        {isLoading2 ? 'Loading...' : 'Save Changes'}
      </Button>
    </div>
  )
}
