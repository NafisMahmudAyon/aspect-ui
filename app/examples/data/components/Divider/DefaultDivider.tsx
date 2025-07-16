import { Divider } from '@/app/src'
import React from 'react'

const DefaultDivider = () => {
  return (
    <div className="space-y-1.5">
      <Divider size='sm'/>
      <Divider />
      <Divider size='lg' />
      <Divider size='xl' />
      <Divider size='2xl' />
      <Divider variant='start' borderStyle='dashed'>
        <p>Start</p>
      </Divider>
      <Divider variant='center' borderStyle='dotted'>
        <p>Center</p>
      </Divider>
      <Divider variant='end' size='xl' borderStyle='double'>
        <p>End</p>
      </Divider>
    </div>
  )
}

export default DefaultDivider