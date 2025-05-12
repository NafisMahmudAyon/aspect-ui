import { ToggleButton, ToggleButtonGroup, } from '@/app/src'

const ToggleButtonExample = () => {
  return (
    <div>
      <ToggleButtonGroup type='single' outline={true}>
        <ToggleButton value='option1'>Option 1</ToggleButton>
        <ToggleButton value='option2'>Option 2</ToggleButton>
        <ToggleButton value='option3'>Option 3</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default ToggleButtonExample