
import { Input } from '@/app/src/components/Input'
import React from 'react'

const InputDemo = () => {
  return (
    <div>
      <form>
        <Input
          label='Username'
          type='password'
          placeholder='Enter your username'
          // icon={<Mail className='text-red-500' />}
        />
        <Input
          label='Email'
          type='email'
          placeholder='Enter your email'
          icon={<span className='text-gray-400'>asd</span>}
        />
        <Input
          label='Password'
          type='password'
          placeholder='Enter your password'
          icon={<span className=''>asd</span>}
          error='Password must be at least 8 characters long'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputDemo
