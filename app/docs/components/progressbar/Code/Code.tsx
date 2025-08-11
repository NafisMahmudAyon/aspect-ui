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

export const progressBarPropsData = [
  {
    prop: 'value',
    type: 'number',
    default: '-',
    description: 'Current progress value.'
  },
  {
    prop: 'contentPosition',
    type: `'left' | 'right'`,
    default: `'right'`,
    description: 'Position of the content (label) relative to the progress bar fill.'
  },
  {
    prop: 'duration',
    type: 'number',
    default: '2',
    description: 'Duration of the progress fill animation in seconds.'
  },
  {
    prop: 'animateOnLoad',
    type: 'boolean',
    default: 'true',
    description: 'Whether to animate the progress fill when the component mounts.'
  },
  {
    prop: 'animateOnVisible',
    type: 'boolean',
    default: 'false',
    description: 'Whether to animate the progress fill when the component becomes visible in viewport.'
  },
  {
    prop: 'min',
    type: 'number',
    default: '0',
    description: 'Minimum value of the progress bar.'
  },
  {
    prop: 'max',
    type: 'number',
    default: '100',
    description: 'Maximum value of the progress bar.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the root progress bar container.'
  },
  {
    prop: 'containerClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the inner container wrapping the progress fill.'
  },
  {
    prop: 'fillClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the progress fill element.'
  },
  {
    prop: 'contentClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the content (label) inside the progress bar.'
  },
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Optional content inside the progress bar, typically a label or percentage.'
  },
  {
    prop: '...rest',
    type: 'React.HTMLAttributes<HTMLDivElement>',
    default: '-',
    description: 'Any other native HTML div attributes passed to the root container.'
  }
]
