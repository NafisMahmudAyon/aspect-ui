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

export const switchPropsData = [
  {
    prop: 'checked',
    type: 'boolean',
    default: '-',
    description: 'Whether the switch is currently on (true) or off (false).'
  },
  {
    prop: 'onChange',
    type: '(checked: boolean) => void',
    default: '-',
    description: 'Callback function triggered when the switch state changes.'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the switch when set to true.'
  },
  {
    prop: 'label',
    type: 'string',
    default: '-',
    description: 'Optional label text displayed next to the switch.'
  },
  {
    prop: 'size',
    type: `'small' | 'medium' | 'large'`,
    default: `'medium'`,
    description: 'Determines the size of the switch.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for the root container.'
  },
  {
    prop: 'switchClassName',
    type: 'string',
    default: `''`,
    description: 'Custom CSS class applied to the switch element.'
  },
  {
    prop: 'activeClassName',
    type: 'string',
    default: `''`,
    description: 'CSS class applied to the active (checked) state container.'
  },
  {
    prop: 'deactiveClassName',
    type: 'string',
    default: `''`,
    description: 'CSS class applied to the inactive (unchecked) state container.'
  },
  {
    prop: 'activeSwitchClassName',
    type: 'string',
    default: `''`,
    description: 'CSS class applied to the switch knob when active.'
  },
  {
    prop: 'deactiveSwitchClassName',
    type: 'string',
    default: `''`,
    description: 'CSS class applied to the switch knob when inactive.'
  },
  {
    prop: 'labelClassName',
    type: 'string',
    default: `''`,
    description: 'CSS class applied to the label element.'
  },
  {
    prop: 'switchIconEnabled',
    type: 'boolean',
    default: 'true',
    description: 'If true, shows the active and inactive switch icons.'
  },
  {
    prop: 'activeSwitchIcon',
    type: 'React.ReactNode',
    default: '-',
    description: 'Icon displayed inside the switch knob when active.'
  },
  {
    prop: 'deactiveSwitchIcon',
    type: 'React.ReactNode',
    default: '-',
    description: 'Icon displayed inside the switch knob when inactive.'
  }
]
