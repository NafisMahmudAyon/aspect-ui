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

export const sidebarPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the Sidebar, typically SidebarItems, SidebarHeader, etc.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the sidebar container.'
  },
  {
    prop: 'breakPoint',
    type: `'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none'`,
    default: `'md'`,
    description: 'Responsive breakpoint at which the sidebar behavior changes.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLElement>',
    default: '-',
    description: 'Additional HTML attributes passed to the root sidebar element.'
  }
]

export const sidebarContainerPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the Sidebar container.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the sidebar container wrapper.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLElement>',
    default: '-',
    description: 'Additional HTML attributes passed to the container element.'
  }
]

export const sidebarFooterPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the sidebar footer.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the sidebar footer container.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLElement>',
    default: '-',
    description: 'Additional HTML attributes passed to the footer element.'
  }
]

export const sidebarHeaderPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the sidebar header.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the sidebar header container.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLElement>',
    default: '-',
    description: 'Additional HTML attributes passed to the header element.'
  }
]

export const sidebarItemPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the sidebar item.'
  },
  {
    prop: 'onClick',
    type: '() => void | undefined',
    default: '-',
    description: 'Callback fired when the sidebar item is clicked.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the sidebar item.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLElement>',
    default: '-',
    description: 'Additional HTML attributes passed to the sidebar item.'
  }
]

export const sidebarToggleButtonPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the toggle button.'
  },
  {
    prop: 'variant',
    type: `'primary' | 'secondary' | 'success' | 'warning' | 'link' | 'outline' | 'ghost' | 'icon' | 'withIcon' | 'default'`,
    default: `'default'`,
    description: 'Visual style variant of the toggle button.'
  },
  {
    prop: 'size',
    type: `'small' | 'medium' | 'large'`,
    default: `'medium'`,
    description: 'Size of the toggle button.'
  },
  {
    prop: 'icon',
    type: 'ReactNode',
    default: '<Menu />',
    description: 'Icon displayed inside the toggle button.'
  },
  {
    prop: '...rest',
    type: 'ButtonHTMLAttributes<HTMLButtonElement>',
    default: '-',
    description: 'Additional button HTML attributes passed to the toggle button.'
  }
]

export const sidebarProviderPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Elements that should have access to the sidebar context (wrapped components).'
  }
]
