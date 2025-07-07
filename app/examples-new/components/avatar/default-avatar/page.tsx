'use client'
import { Avatar, AvatarBadge, AvatarImage } from '@/app/src'
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
  const [avatarData, setAvatarData] = useState<AvatarData>({} as AvatarData)
  useEffect(() => {
    const data = async () => {
      const res = await fetch('https://api.nafisbd.com/api/person?limit=1')
      const data = await res.json()
      setAvatarData(data.data[0])
    }
    data()
  }, [])
  // console.log(avatarData)
  return (
    <Avatar className='border'>
      <AvatarImage
        src={avatarData.avatar}
        altText={
          avatarData.first_name ??
          'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-manei-3211476.jpg&fm=jpg&w=640&h=640'
        }
      />
      <AvatarBadge status='success' iconEnabled />
    </Avatar>
  )
}

export default page
