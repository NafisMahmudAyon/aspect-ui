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

export const timelinePropsData = [
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '-',
    description: 'Timeline content elements to be displayed.'
  },
  {
    prop: 'position',
    type: `'left' | 'right' | 'mixed'`,
    default: `'left'`,
    description: 'Position of the timeline items. `mixed` alternates positions.'
  },
  {
    prop: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS class for the timeline container.'
  },
  {
    prop: 'lineClassName',
    type: 'string',
    default: '-',
    description: 'Additional CSS class for the timeline line element.'
  },
  {
    prop: 'lineStyle',
    type: `'solid' | 'dashed'`,
    default: `'solid'`,
    description: 'The style of the connecting line between timeline items.'
  },
  {
    prop: '...rest',
    type: 'React.HTMLAttributes<HTMLDivElement>',
    default: '-',
    description: 'Additional props passed to the timeline container element.'
  }
]

export const timelineItemPropsData = [
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '-',
    description: 'Content for the timeline item.'
  },
  {
    prop: 'position',
    type: `'left' | 'right'`,
    default: `'left'`,
    description: 'The side where the timeline item is displayed.'
  },
  {
    prop: 'isMixed',
    type: 'boolean',
    default: 'false',
    description: 'Indicates if the timeline item is part of a mixed-position timeline.'
  },
  {
    prop: 'icon',
    type: 'React.ReactNode',
    default: '-',
    description: 'Optional icon to display in the timeline dot.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for the timeline item element.'
  },
  {
    prop: 'containerClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for the item’s container.'
  },
  {
    prop: 'dotClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for the timeline dot element.'
  },
  {
    prop: '...rest',
    type: 'React.HTMLAttributes<HTMLDivElement>',
    default: '-',
    description: 'Additional props passed to the timeline item container.'
  }
]
