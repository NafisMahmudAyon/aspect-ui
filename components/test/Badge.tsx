import { Badge } from '@/app/src'
import React from 'react'

const BadgeDemo = () => {
  return (
    <div>
      <Badge>Default</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  )
}

export default BadgeDemo