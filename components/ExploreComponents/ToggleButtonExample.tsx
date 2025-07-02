import { ToggleButton, ToggleButtonGroup, } from '@/app/src'
import { AlignCenterHorizontal, AlignCenterVertical, AlignEndHorizontal } from 'lucide-react'

const ToggleButtonExample = () => {
  return (
    <div>
      <ToggleButtonGroup type='single' outline={true}>
        <ToggleButton value='option1'><AlignCenterHorizontal /></ToggleButton>
        <ToggleButton value='option2'><AlignCenterVertical /></ToggleButton>
        <ToggleButton value='option3'><AlignEndHorizontal /></ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default ToggleButtonExample