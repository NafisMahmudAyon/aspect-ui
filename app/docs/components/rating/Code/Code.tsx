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

export const ratingPropsData = [
  {
    prop: 'maxRating',
    type: 'number',
    default: '5',
    description: 'Maximum number of rating stars.'
  },
  {
    prop: 'initialRating',
    type: 'number',
    default: '0',
    description: 'Initial rating value.'
  },
  {
    prop: 'size',
    type: 'number',
    default: '24',
    description: 'Size of each star icon in pixels.'
  },
  {
    prop: 'onChange',
    type: '(event: React.ChangeEvent<HTMLInputElement>, rating: number) => void',
    default: '-',
    description: 'Callback fired when the rating changes.'
  },
  {
    prop: 'starColor',
    type: 'string',
    default: `'color-mix(in oklab, var(--color-primary) 50%, transparent)'`,
    description: 'Color of the filled stars.'
  },
  {
    prop: 'hoverColor',
    type: 'string',
    default: `'var(--color-primary)'`,
    description: 'Color of stars on hover.'
  },
  {
    prop: 'unratedColor',
    type: 'string',
    default: `'var(--color-bg)'`,
    description: 'Color of unrated (empty) stars.'
  },
  {
    prop: 'ratingTexts',
    type: 'string[]',
    default: 'defaultRatingTexts',
    description: 'Text labels for each rating value.'
  },
  {
    prop: 'readOnly',
    type: 'boolean',
    default: 'false',
    description: 'If true, disables rating changes (read-only mode).'
  },
  {
    prop: 'icon',
    type: 'ReactNode',
    default: '-',
    description: 'Custom icon to use instead of default star.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the rating component container.'
  }
]
