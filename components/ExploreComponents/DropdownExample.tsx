import { Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from '@/app/src'

const DropdownExample = () => {
  return (
    <div>
      <Dropdown hover>
        <DropdownAction>
          Options
        </DropdownAction>
        <DropdownContent>
          <DropdownList>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem>
              Option 3
            </DropdownItem>
          </DropdownList>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}

export default DropdownExample