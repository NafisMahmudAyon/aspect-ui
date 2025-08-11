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

export const inputPropsData = [
  {
    prop: 'label',
    type: 'string',
    default: '-',
    description: 'Optional label text displayed above the input field.'
  },
  {
    prop: 'type',
    type: 'string',
    default: `'text'`,
    description: 'Specifies the type of input element (e.g., text, password, email).'
  },
  {
    prop: 'error',
    type: 'string',
    default: '-',
    description: 'Error message displayed below the input field.'
  },
  {
    prop: 'icon',
    type: 'ReactNode',
    default: '<Mail />',
    description: 'Optional icon displayed inside the input field.'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the input field if true.'
  },
  {
    prop: 'labelClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the label element.'
  },
  {
    prop: 'iconClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the icon element.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the input element.'
  },
  {
    prop: 'wrapperClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the input wrapper container.'
  },
  {
    prop: 'errorClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the error message.'
  },
  {
    prop: 'passwordIconClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the password toggle icon (if applicable).'
  },
  {
    prop: 'onChange',
    type: '(event: ChangeEvent<HTMLInputElement>) => void',
    default: '-',
    description: 'Callback function triggered when the input value changes.'
  },
  {
    prop: '...rest',
    type: 'InputHTMLAttributes<HTMLInputElement>',
    default: '-',
    description: 'Any other native input attributes will be passed to the input element.'
  }
]
