

export const defaultCheckbox = {
  'CheckboxComponent.tsx': `import { Checkbox } from '@/components/aspect-ui/Checkbox'

const DefaultCheckbox = () => {
  return (
    <Checkbox label="Default Checkbox" checked={true} />
  )
}

export default DefaultCheckbox
  `,
  'CheckboxComponent.jsx': `import { Checkbox } from '@/components/aspect-ui/Checkbox'

const DefaultCheckbox = () => {
  return (
    <Checkbox label="Default Checkbox" checked={true} />
  )
}

export default DefaultCheckbox
  `
}
export const checkboxWithLabel = {
  'CheckboxComponent.tsx': `import { Checkbox } from '@/components/aspect-ui/Checkbox'

const DefaultCheckbox = () => {
  return (
    <Checkbox label="Checkbox with Label" checked={true} />
  )
}

export default DefaultCheckbox
  `,
  'CheckboxComponent.jsx': `import { Checkbox } from '@/components/aspect-ui/Checkbox'

const DefaultCheckbox = () => {
  return (
    <Checkbox label="Checkbox with Label" checked={true} />
  )
}

export default DefaultCheckbox
  `
}

export const disabledCheckbox = {
  'CheckboxComponent.tsx': `import { Checkbox } from '@/components/aspect-ui/Checkbox'

const DefaultCheckbox = () => {
  return (
    <Checkbox label="Checkbox with Label" checked={true} disabled />
  )
}

export default DefaultCheckbox
  `,
  'CheckboxComponent.jsx': `import { Checkbox } from '@/components/aspect-ui/Checkbox'

const DefaultCheckbox = () => {
  return (
    <Checkbox label="Checkbox with Label" checked={true} disabled />
  )
}

export default DefaultCheckbox
  `
}


export const alertPropsData = [
  {
    prop: 'type',
    type: `'success' | 'warning' | 'error' | 'info'`,
    default: '-',
    description: 'Specifies the type of alert to display, which determines the style and icon.',
  },
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The content displayed inside the alert.',
  },
  {
    prop: 'closeable',
    type: 'boolean',
    default: 'true',
    description: 'Determines whether the alert can be dismissed.',
  },
  {
    prop: 'onClose',
    type: '() => void',
    default: '-',
    description: 'Callback function invoked when the alert is closed.',
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the alert container.',
  },
];
