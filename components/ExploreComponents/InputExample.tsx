import { Button, Input } from '@/app/src'
import { Lock, Mail, User } from 'lucide-react'
import React from 'react'

const InputExample = () => {
  return (
    <div>
      <form>
              <Input
                label='Username'
                type='text'
                placeholder='Enter your username'
                icon={<User />}
                value="admin"
                />
              <Input
                label='Email'
                type='email'
                placeholder='Enter your email'
                value="admin@example.com"
                icon={<Mail />}
              />
              <Input
                label='Password'
                type='password'
                placeholder='Enter your password'
                icon={<Lock />}
                value={"123456"}
                error='Password must be at least 8 characters long'
              />
              <Button variant='outline' type='submit'>Submit</Button>
            </form>
    </div>
  )
}

export default InputExample