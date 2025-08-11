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

export const dropdownPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The content of the dropdown, usually containing DropdownAction and DropdownContent.'
  },
  {
    prop: 'hover',
    type: 'boolean',
    default: 'false',
    description: 'Whether the dropdown opens on hover instead of click.'
  },
  {
    prop: 'hoverDelay',
    type: 'number',
    default: '0',
    description: 'Delay in milliseconds before opening the dropdown on hover.'
  },
  {
    prop: 'closeDelay',
    type: 'number',
    default: '100',
    description: 'Delay in milliseconds before closing the dropdown after hover ends.'
  },
  {
    prop: 'direction',
    type: `'top' | 'bottom' | 'left' | 'right'`,
    default: `'bottom'`,
    description: 'The direction in which the dropdown content appears relative to the action button.'
  }
]



export const dropdownActionPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The trigger element for the dropdown, such as a button or label.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for styling the action trigger.'
  },
  {
    prop: 'icon',
    type: 'ReactElement',
    default: '-',
    description: 'An optional icon to display inside the action trigger.'
  },
  {
    prop: 'iconPosition',
    type: `'start' | 'end'`,
    default: `'end'`,
    description: 'Position of the icon relative to the text.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes',
    default: '-',
    description: 'Any other props are spread onto the action element.'
  }
]

export const dropdownContentPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The content displayed inside the dropdown when open.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the dropdown content wrapper.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLDivElement>',
    default: '-',
    description: 'Any other props are spread onto the dropdown content container.'
  }
]


export const dropdownItemPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The content inside the dropdown item, such as text or a link.'
  },
  {
    prop: 'onClick',
    type: '() => void',
    default: '-',
    description: 'Callback function when the item is clicked.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the dropdown item.'
  },
  {
    prop: 'activeClassName',
    type: 'string',
    default: `''`,
    description: 'CSS class applied when the item is active or selected.'
  },
  {
    prop: 'isSelected',
    type: 'boolean',
    default: 'false',
    description: 'Marks the item as selected.'
  },
  {
    prop: 'isLink',
    type: 'boolean',
    default: 'false',
    description: 'Indicates if the item is rendered as a link.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes',
    default: '-',
    description: 'Any other props are spread onto the dropdown item element.'
  }
]

export const dropdownListPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The list of dropdown items to display.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the dropdown list wrapper.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes',
    default: '-',
    description: 'Any other props are spread onto the dropdown list container.'
  }
]
