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

export const tabPropsData = {
  TabContent: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'Content to display when the tab is active.'
    },
    {
      prop: 'id',
      type: 'string',
      default: '-',
      description: 'Unique identifier for the tab content, matching its corresponding TabItem ID.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for styling the tab content.'
    }
  ],
  TabItem: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'Label or content of the tab.'
    },
    {
      prop: 'id',
      type: 'string',
      default: '-',
      description: 'Unique identifier for the tab, used to match TabContent.'
    },
    {
      prop: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the tab is disabled and non-interactive.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the tab item.'
    },
    {
      prop: 'activeClassName',
      type: 'string',
      default: `''`,
      description: 'CSS class applied when the tab is active.'
    },
    {
      prop: 'disabledClassName',
      type: 'string',
      default: `''`,
      description: 'CSS class applied when the tab is disabled.'
    },
    {
      prop: 'onClick',
      type: '() => void',
      default: '-',
      description: 'Callback triggered when the tab is clicked.'
    }
  ],
  TabList: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'A collection of TabItem components.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the tab list container.'
    }
  ],
  Tabs: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'TabList and TabContent components.'
    },
    {
      prop: 'defaultActive',
      type: 'string',
      default: '-',
      description: 'ID of the tab that should be active by default.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the root tabs container.'
    }
  ]
}
