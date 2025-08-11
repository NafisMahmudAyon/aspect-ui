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

export const paginationPropsData = [
  {
    prop: 'count',
    type: 'number',
    default: '-',
    description: 'Total number of pages.'
  },
  {
    prop: 'defaultPage',
    type: 'number',
    default: '1',
    description: 'The initially selected page.'
  },
  {
    prop: 'boundaryCount',
    type: 'number',
    default: '1',
    description: 'Number of pages to show at the beginning and end of pagination.'
  },
  {
    prop: 'siblingCount',
    type: 'number',
    default: '1',
    description: 'Number of pages to show on each side of the current page.'
  },
  {
    prop: 'showFirstLast',
    type: 'boolean',
    default: 'false',
    description: 'Whether to show First and Last page buttons.'
  },
  {
    prop: 'showNextPrev',
    type: 'boolean',
    default: 'false',
    description: 'Whether to show Next and Previous page buttons.'
  },
  {
    prop: 'firstButton',
    type: 'ReactNode',
    default: `'First'`,
    description: 'Custom content for the First page button.'
  },
  {
    prop: 'lastButton',
    type: 'ReactNode',
    default: `'Last'`,
    description: 'Custom content for the Last page button.'
  },
  {
    prop: 'nextButton',
    type: 'ReactNode',
    default: `'Next'`,
    description: 'Custom content for the Next page button.'
  },
  {
    prop: 'previousButton',
    type: 'ReactNode',
    default: `'Previous'`,
    description: 'Custom content for the Previous page button.'
  },
  {
    prop: 'firstButtonClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the First button.'
  },
  {
    prop: 'lastButtonClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the Last button.'
  },
  {
    prop: 'nextButtonClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the Next button.'
  },
  {
    prop: 'previousButtonClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the Previous button.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the root pagination container.'
  },
  {
    prop: 'buttonClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for each page button.'
  },
  {
    prop: 'activeClassName',
    type: 'string',
    default: `''`,
    description: 'CSS class applied to the active page button.'
  },
  {
    prop: 'ellipsisClassName',
    type: 'string',
    default: `''`,
    description: 'CSS class applied to the ellipsis elements.'
  },
  {
    prop: 'numberType',
    type: `'normal' | 'roman' | 'custom'`,
    default: `'normal'`,
    description: 'Type of page numbering to display.'
  },
  {
    prop: 'numbers',
    type: 'string[]',
    default: '[]',
    description: 'Custom array of page numbers (used only if numberType is "custom").'
  },
  {
    prop: 'onChange',
    type: '(page: number) => void',
    default: '-',
    description: 'Callback fired when the page changes.'
  }
]
