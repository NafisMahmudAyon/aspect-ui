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


export const tablePropsData = {
  Table: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'Table content, typically composed of TableHeader, TableBody, and TableFooter.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the table element.'
    }
  ],
  TableBody: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'Content of the table body, typically TableRow components.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the table body.'
    }
  ],
  TableCaption: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'Caption text describing the table.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the table caption.'
    },
    {
      prop: 'position',
      type: `'top' | 'bottom'`,
      default: `'bottom'`,
      description: 'Position of the caption relative to the table.'
    }
  ],
  TableCell: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'Content of the table cell.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the table cell.'
    },
    {
      prop: 'colSpan',
      type: 'number',
      default: '-',
      description: 'Number of columns the cell should span.'
    },
    {
      prop: '...rest',
      type: 'React.HTMLAttributes<HTMLTableCellElement>',
      default: '-',
      description: 'Any other standard table cell attributes.'
    }
  ],
  TableFooter: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'Footer content for the table.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the table footer.'
    },
    {
      prop: '...rest',
      type: 'React.HTMLAttributes<HTMLTableSectionElement>',
      default: '-',
      description: 'Any other standard table section attributes.'
    }
  ],
  TableHeadCell: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'Content of the table header cell.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the table header cell.'
    }
  ],
  TableHeader: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'Content of the table header, typically TableRow components.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the table header.'
    },
    {
      prop: '...rest',
      type: '-',
      default: '-',
      description: 'Any other props supported by the header container element.'
    }
  ],
  TableRow: [
    {
      prop: 'children',
      type: 'ReactNode',
      default: '-',
      description: 'Content of the table row, typically TableCell or TableHeadCell components.'
    },
    {
      prop: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS class for the table row.'
    }
  ]
}
