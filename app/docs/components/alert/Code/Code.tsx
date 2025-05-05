


export const defaultAlert = {
  'AlertComponent.tsx': `import { Alert } from '@/components/aspect-ui/Alert'

const DefaultAlert = () => {
  return (
    <Alert type='success'>
      Operation completed successfully!
    </Alert>
  )
}

export default DefaultAlert
  `,
  'AlertComponent.jsx': `import { Alert } from '@/components/aspect-ui/Alert'

const DefaultAlert = () => {
  return (
    <Alert type='success'>
      Operation completed successfully!
    </Alert>
  )
}

export default DefaultAlert
  `
}


export const multipleTypeAlert = {
  'AccordionComponent.tsx': `import { Alert } from '@/components/aspect-ui/Alert'

const DefaultAlert = () => {
  return (
    <div className='space-y-3'>
      <Alert type="success" closeable={false}>
        Operation completed successfully!
      </Alert>
      <Alert type="info" closeable={false}>
        This is an informational message for your reference.
      </Alert>
      <Alert type="warning" closeable={false}>
        Warning: This action requires your attention!
      </Alert>
      <Alert type="error" closeable={false}>
        Error: Operation failed! Please try again.
      </Alert>
    </div>
  )
}

export default DefaultAlert
  `,
  'AccordionComponent.jsx': `import { Alert } from '@/components/aspect-ui/Alert'

const DefaultAlert = () => {
  return (
    <div className='space-y-3'>
      <Alert type="success" closeable={false}>
        Operation completed successfully!
      </Alert>
      <Alert type="info" closeable={false}>
        This is an informational message for your reference.
      </Alert>
      <Alert type="warning" closeable={false}>
        Warning: This action requires your attention!
      </Alert>
      <Alert type="error" closeable={false}>
        Error: Operation failed! Please try again.
      </Alert>
    </div>
  )
}

export default DefaultAlert
  `,
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
