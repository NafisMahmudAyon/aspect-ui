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

export const checkboxPropsData = [
  {
    prop: 'label',
    type: 'string',
    default: '-',
    description:
      'The label of the checkbox.'
  },
  {
    prop: 'checked',
    type: 'boolean',
    default: '-',
    description:
      'The checked state of the checkbox.'
  },
  {
    prop: 'onChange',
    type: '() => void',
    default: '-',
    description:
      'The onChange event of the checkbox.'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: '-',
    description:
      'The disabled state of the checkbox.'
  },
  {
    prop: 'className',
    type: 'string',
    default: '-',
    description:
      'The className of the checkbox.'
  },
  {
    prop: 'size',
    type: `'sm' | 'md' | 'lg'`,
    default: 'md',
    description:
      'The size of the checkbox.'
  },
  {
    prop: 'variant',
    type: `'default' | 'rounded'`,
    default: 'default',
    description:
      'The variant of the checkbox.'
  },
  {
    prop: 'checkedIcon',
    type: 'React.ReactNode',
    default: '-',
    description:
      'The checked icon of the checkbox.'
  },
  {
    prop: 'checkboxClassName',
    type: 'string',
    default: '-',
    description:
      'The className of the checkbox.'
  },
  {
    prop: 'labelClassName',
    type: 'string',
    default: '-',
    description:
      'The className of the label.'
  }
]
