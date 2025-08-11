export const defaultAvatar = {
  'AvatarComponent.tsx': `import { Avatar, AvatarBadge, AvatarImage } from '@/components/aspect-ui/Avatar'

const DefaultAvatar = () => {
  return (
    <Avatar className='border'>
      <AvatarImage
        src={avatarData.avatar}
        altText={"..."}
      />
      <AvatarBadge status='success' iconEnabled />
    </Avatar>
  )
}

export default DefaultAvatar
  `,
  'AvatarComponent.jsx': `import { Avatar, AvatarBadge, AvatarImage } from '@/components/aspect-ui/Avatar'

const DefaultAvatar = () => {
  return (
    <Avatar className='border'>
      <AvatarImage
        src={avatarData.avatar}
        altText={"..."}
      />
      <AvatarBadge status='success' iconEnabled />
    </Avatar>
  )
}

export default DefaultAvatar
  `
}

export const avatarGroup = {
  'AvatarComponent.tsx': `import { Avatar, AvatarBadge, AvatarGroup, AvatarImage } from '@/components/aspect-ui/Avatar'

const DefaultAvatar = () => {
  return (
    <AvatarGroup>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
    </AvatarGroup>
  )
}

export default DefaultAvatar
  `,
  'AvatarComponent.jsx': `import { Avatar, AvatarBadge, AvatarGroup, AvatarImage } from '@/components/aspect-ui/Avatar'

const DefaultAvatar = () => {
  return (
    <AvatarGroup>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
    </AvatarGroup>
  )
}

export default DefaultAvatar
  `
}

export const alertPropsData = [
  {
    prop: 'type',
    type: `'success' | 'warning' | 'error' | 'info'`,
    default: '-',
    description:
      'Specifies the type of alert to display, which determines the style and icon.'
  },
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The content displayed inside the alert.'
  },
  {
    prop: 'closeable',
    type: 'boolean',
    default: 'true',
    description: 'Determines whether the alert can be dismissed.'
  },
  {
    prop: 'onClose',
    type: '() => void',
    default: '-',
    description: 'Callback function invoked when the alert is closed.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the alert container.'
  }
]

export const togglePropsData = [
  {
    prop: 'value',
    type: 'string',
    default: '-',
    description: 'The value associated with the toggle, passed to onChange when clicked.'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '-',
    description: 'Content to be displayed inside the toggle.'
  },
  {
    prop: 'className',
    type: 'string',
    default: "''",
    description: 'Additional CSS class for the toggle element.'
  },
  {
    prop: 'defaultSelected',
    type: 'boolean',
    default: 'false',
    description: 'Whether the toggle is initially selected.'
  },
  {
    prop: 'outline',
    type: 'boolean',
    default: 'false',
    description: 'Whether the toggle has an outline style.'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Whether the toggle is disabled.'
  },
  {
    prop: 'size',
    type: `'small' | 'medium' | 'large'`,
    default: "'medium'",
    description: 'Size of the toggle button.'
  },
  {
    prop: 'onChange',
    type: '(value: string, selected: boolean) => void',
    default: '-',
    description: 'Callback when the toggle selection state changes.'
  }
]

export const toggleButtonPropsData = [
  {
    prop: 'value',
    type: 'string',
    default: '-',
    description: 'The value associated with the toggle button.'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '-',
    description: 'Content to be displayed inside the toggle button.'
  },
  {
    prop: 'className',
    type: 'string',
    default: "''",
    description: 'Additional CSS class for the toggle button element.'
  }
]

export const toggleButtonGroupPropsData = [
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '-',
    description: 'Toggle buttons to be rendered inside the group.'
  },
  {
    prop: 'type',
    type: `'single' | 'multiple'`,
    default: '-',
    description: 'Defines whether one or multiple toggles can be selected at once.'
  },
  {
    prop: 'defaultValue',
    type: 'string | string[]',
    default: '-',
    description: 'Initial selected value(s) for the group.'
  },
  {
    prop: 'onChange',
    type: '(value: string | string[]) => void',
    default: '-',
    description: 'Callback when the selected value(s) change.'
  },
  {
    prop: 'className',
    type: 'string',
    default: "''",
    description: 'Additional CSS class for the toggle button group element.'
  },
  {
    prop: 'outline',
    type: 'boolean',
    default: 'false',
    description: 'Whether the toggle buttons in the group use the outline style.'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Whether the toggle button group is disabled.'
  }
]
