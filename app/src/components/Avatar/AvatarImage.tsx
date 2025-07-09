'use client'

import { User } from 'lucide-react'
import React from 'react'
import { cn } from '../../utils/cn'

interface AvatarImageProps {
  className?: string
  name?: string
  src?: string
  altText?: string
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  className = '',
  name,
  src,
  altText,
  ...rest
}) => {
  let nameX: string | undefined

  if (name !== undefined) {
    if (name.split(' ').length > 1) {
      nameX = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    } else {
      nameX = `${name[0]}`
    }
  }

  if (src) {
    return (
      <img
        src={src}
        alt={altText || 'alt text'}
        {...(name && { title: name })}
        className={cn(
          'aspect-square h-auto max-w-full overflow-hidden rounded-full object-cover',
          className
        )}
        {...rest}
      />
    )
  }
  if (!src && name) {
    return (
      <span className={className} title={name} {...rest}>
        {nameX || 'A'}
      </span>
    )
  }
  return (
    <>
      <User />
    </>
  )
}
