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

export const navbarPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the Navbar, typically NavbarCollapse, buttons, or links.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the navbar container.'
  },
  {
    prop: 'collapseBreakpoint',
    type: `'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all'`,
    default: `'md'`,
    description: 'Screen size breakpoint at which the navbar collapses.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLElement>',
    default: '-',
    description: 'Additional HTML attributes spread to the navbar container.'
  }
]

export const navbarCollapsePropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the collapsible navbar section.'
  },
  {
    prop: 'className',
    type: 'string | undefined',
    default: '-',
    description: 'Additional CSS classes for the collapsible container.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLDivElement> & MotionProps',
    default: '-',
    description: 'Any other HTML or animation props passed to the collapsible container.'
  }
]

export const navbarCollapseBtnPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the collapse toggle button.'
  },
  {
    prop: 'icon',
    type: 'ReactNode',
    default: '-',
    description: 'Optional icon to display inside the collapse toggle button.'
  },
  {
    prop: '...rest',
    type: 'ButtonHTMLAttributes<HTMLButtonElement>',
    default: '-',
    description: 'Other native button attributes passed to the collapse button.'
  }
]

export const navbarContainerPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the Navbar container.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the Navbar container wrapper.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLElement>',
    default: '-',
    description: 'Additional HTML attributes passed to the container element.'
  }
]

export const navbarItemPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the Navbar item, such as a link or button.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the Navbar item.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLElement>',
    default: '-',
    description: 'Additional HTML attributes passed to the Navbar item element.'
  }
]

export const navbarListPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the Navbar list, typically multiple NavbarItem components.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the Navbar list container.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLElement>',
    default: '-',
    description: 'Additional HTML attributes passed to the Navbar list container.'
  }
]
