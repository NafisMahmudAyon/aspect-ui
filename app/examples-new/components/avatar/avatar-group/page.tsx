'use client'
import { Avatar, AvatarBadge, AvatarGroup, AvatarImage } from '@/app/src'
import { useEffect, useState } from 'react'

interface AvatarData {
  first_name: string
  last_name: string
  email: string
  gender: string
  phone: string
  dob: string

  nationality: string
  occupation: string
  address: {
    street: string
    city: string
    state: string
    country: string
    zip: string
  }
  avatar: string
  status: string
}

const page = () => {
  const [avatarData, setAvatarData] = useState<AvatarData[]>([])
  useEffect(() => {
    const data = async () => {
      const res = await fetch('https://api.nafisbd.com/api/person?limit=6')
      const data = await res.json()
      setAvatarData(data.data)
    }
    data()
  }, [])
  // console.log(avatarData)
  return (
    <AvatarGroup>
      {avatarData.map((item, index) => (
        <Avatar key={index} className='border'>
          <AvatarImage
            src={item.avatar}
            altText={item.first_name}
          />
          <AvatarBadge status='success' iconEnabled />
        </Avatar>
      ))}
    </AvatarGroup>
  )
}

export default page