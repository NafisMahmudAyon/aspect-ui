export const defaultBadge = {
  'BadgeExample.tsx': `import { Badge } from '@/components/aspect-ui/Badge'

const BadgeExample = () => {
  return (
    <Badge>Badge</Badge>
  )
}

export default BadgeExample
  `,
  'BadgeExample.jsx': `import { Badge } from '@/components/aspect-ui/Badge'

const BadgeExample = () => {
  return (
    <Badge>Badge</Badge>
  )
}

export default BadgeExample
  `
}
export const outlineBadge = {
  'OutlineBadgeExample.tsx': `import { Badge } from '@/components/aspect-ui/Badge'

const OutlineBadgeExample = () => {
  return (
    <Badge variant='outline'>Badge</Badge>
  )
}

export default OutlineBadgeExample
  `,
  'OutlineBadgeExample.jsx': `import { Badge } from '@/components/aspect-ui/Badge'

const OutlineBadgeExample = () => {
  return (
    <Badge variant='outline'>Outline</Badge>
  )
}

export default OutlineBadgeExample
  `
}
export const ghostBadge = {
  'GhostBadgeExample.tsx': `import { Badge } from '@/components/aspect-ui/Badge'

const GhostBadgeExample = () => {
  return (
    <Badge variant='ghost'>Badge</Badge>
  )
}

export default GhostBadgeExample
  `,
  'GhostBadgeExample.jsx': `import { Badge } from '@/components/aspect-ui/Badge'

const GhostBadgeExample = () => {
  return (
    <Badge variant='ghost'>Badge</Badge>
  )
}

export default GhostBadgeExample
  `
}

export const badgePropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Custom content for the button.'
  },
  {
    prop: 'className',
    type: 'string',
    default: "''",
    description: 'Additional CSS classes for the button.'
  },
  {
    prop: 'variant',
    type: `'default' | 'outline' | 'ghost'`,
    default: 'default',
    description: 'The variant of the badge.'
  }
]
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
