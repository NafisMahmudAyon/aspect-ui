import { Checkbox } from '@/app/src'
import React from 'react'

const CheckboxExample = () => {
  return (
    <div>
      <fieldset className="flex items-center gap-2">
        <Checkbox checked={true} label='Apple' onChange={()=>{}} />
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox checked={true} label="Banana" onChange={()=>{}} />
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox checked={true} label="Orange" onChange={()=>{}} />
      </fieldset>
    </div>
  )
}

export default CheckboxExample