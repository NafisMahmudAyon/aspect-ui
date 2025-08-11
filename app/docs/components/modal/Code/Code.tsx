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

export const modalPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the modal, typically ModalAction and ModalContent components.'
  },
  {
    prop: 'isOpenExternal',
    type: 'boolean',
    default: '-',
    description: 'Controls whether the modal is open (controlled mode).'
  },
  {
    prop: 'onToggle',
    type: '(isOpen: boolean) => void',
    default: '-',
    description: 'Callback fired when the modal open state changes.'
  }
]

export const modalActionPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content of the modal action button.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the action button.'
  },
  {
    prop: '...rest',
    type: 'ButtonHTMLAttributes<HTMLButtonElement>',
    default: '-',
    description: 'Any other native button attributes passed to the action button.'
  }
]

export const modalContentPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the modal content container.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the modal content container.'
  },
  {
    prop: 'overlayClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the modal overlay background.'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes<HTMLDivElement> & MotionProps',
    default: '-',
    description: 'Additional HTML and animation props passed to the modal content container.'
  }
]
