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

export const fileUploadPropsData = [
  {
    prop: 'onFileSelect',
    type: '(files: File[]) => void',
    default: '-',
    description: 'Callback function triggered when files are selected.'
  },
  {
    prop: 'accept',
    type: 'string',
    default: "'*'",
    description: 'Specifies the accepted file types (e.g., "image/*", ".pdf").'
  },
  {
    prop: 'multiple',
    type: 'boolean',
    default: 'false',
    description: 'Allows selection of multiple files if set to true.'
  },
  {
    prop: 'maxFiles',
    type: 'number',
    default: '1',
    description: 'Maximum number of files that can be selected.'
  },
  {
    prop: 'maxFileSize',
    type: 'number',
    default: '-',
    description: 'Maximum file size allowed, in bytes.'
  },
  {
    prop: 'selectedFiles',
    type: 'File[]',
    default: '[]',
    description: 'List of preselected files.'
  },
  {
    prop: 'content',
    type: 'React.ReactNode',
    default: '-',
    description: 'Custom content to display in the upload area.'
  },
  {
    prop: 'uploadIcon',
    type: 'React.ReactNode',
    default: '-',
    description: 'Icon displayed for uploading files.'
  },
  {
    prop: 'deleteButton',
    type: 'React.ReactNode',
    default: '-',
    description: 'Custom delete button element for removing files.'
  },
  {
    prop: 'uploadIconClassName',
    type: 'string',
    default: "''",
    description: 'Additional CSS class for the upload icon.'
  },
  {
    prop: 'deleteIconClassName',
    type: 'string',
    default: "''",
    description: 'Additional CSS class for the delete icon.'
  }
]
