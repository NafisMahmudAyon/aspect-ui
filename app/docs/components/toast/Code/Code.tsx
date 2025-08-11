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


export const toastOptionsPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS class for the toast element.'
  },
  {
    prop: 'containerClassName',
    type: 'string',
    default: '-',
    description: 'Additional CSS class for the toast container element.'
  },
  {
    prop: 'message',
    type: 'string',
    default: '-',
    description: 'Main message text displayed in the toast.'
  },
  {
    prop: 'description',
    type: 'string',
    default: '-',
    description: 'Optional secondary text displayed below the main message.'
  },
  {
    prop: 'messageClassName',
    type: 'string',
    default: '-',
    description: 'CSS class applied to the toast message text.'
  },
  {
    prop: 'messageAreaClassName',
    type: 'string',
    default: '-',
    description: 'CSS class applied to the container holding the message and description.'
  },
  {
    prop: 'descriptionClassName',
    type: 'string',
    default: '-',
    description: 'CSS class applied to the toast description text.'
  },
  {
    prop: 'type',
    type: `'success' | 'error' | 'info' | 'warning'`,
    default: '-',
    description: 'Type of the toast, which can affect styling and icon.'
  },
  {
    prop: 'duration',
    type: 'number',
    default: '-',
    description: 'Duration in milliseconds before the toast automatically disappears.'
  },
  {
    prop: 'action',
    type: 'ToastAction',
    default: '-',
    description: 'Optional action button configuration for the toast.'
  },
  {
    prop: 'id',
    type: 'string',
    default: '-',
    description: 'Optional ID for the toast. If not provided, one may be auto-generated.'
  }
]
