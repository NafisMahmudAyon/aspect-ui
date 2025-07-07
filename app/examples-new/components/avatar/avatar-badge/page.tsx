'use client'
import { Avatar, AvatarBadge, AvatarImage } from '@/app/src'
import { BadgeCheck } from 'lucide-react'
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
      const res = await fetch('https://api.nafisbd.com/api/person?limit=7')
      const data = await res.json()
      setAvatarData(data.data)
    }
    data()
  }, [])
  return (
    <div className='flex gap-4'>
      <Avatar className='border'>
        <AvatarImage
          src={
            (avatarData[0] && avatarData[0].avatar) ??
            'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-manei-3211476.jpg&fm=jpg&w=640&h=640'
          }
          altText={avatarData[0] && avatarData[0].first_name}
        />
        <AvatarBadge status='success' />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src={
            (avatarData[1] && avatarData[1].avatar) ??
            'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-manei-3211476.jpg&fm=jpg&w=640&h=640'
          }
          altText={avatarData[1] && avatarData[1].first_name}
        />
        <AvatarBadge status='warning' />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage name={avatarData[2] && avatarData[2].first_name} />
        <AvatarBadge status='error' />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src={
            (avatarData[3] && avatarData[3].avatar) ??
            'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-manei-3211476.jpg&fm=jpg&w=640&h=640'
          }
          altText={avatarData[3] && avatarData[3].first_name}
        />
        <AvatarBadge status='info' />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src={
            (avatarData[4] && avatarData[4].avatar) ??
            'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-manei-3211476.jpg&fm=jpg&w=640&h=640'
          }
          altText={avatarData[4] && avatarData[4].first_name}
        />
        <AvatarBadge type='counter' counter={10} />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src={
            (avatarData[5] && avatarData[5].avatar) ??
            'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-manei-3211476.jpg&fm=jpg&w=640&h=640'
          }
          altText={avatarData[5] && avatarData[5].first_name}
        />
        <AvatarBadge type='counter' counter={10} position='top-right' />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src={
            (avatarData[6] && avatarData[6].avatar) ??
            'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-manei-3211476.jpg&fm=jpg&w=640&h=640'
          }
          altText={avatarData[6] && avatarData[6].first_name}
        />
        <AvatarBadge
          type='status'
          status='info'
          position='bottom-right'
          iconEnabled={true}
          icon={<BadgeCheck />}
        />
      </Avatar>
    </div>
  )
}

export default page
