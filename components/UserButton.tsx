'use client'
import { Avatar, AvatarBadge, AvatarImage, Button, Card, CardContent, CardHeader, Divider } from '@/app/src'
import { Popover } from '@/app/src/components/Popover'
import { useUserContext } from '@/context/UserContext'
import { Calendar, Clock, Copy, Crown, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

const UserButton = () => {
  const { user, isProUser } = useUserContext()
  const [isOpen, setIsOpen] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [showCountdown, setShowCountdown] = useState(true)
  const copyApiKey = () => {
    navigator.clipboard.writeText(user.apiKey!)
  }

  const daysLeft = Math.ceil((new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  return (
    <>


      <Popover isOpen={isOpen} position='bottom' offset={30} className="" content={
        <Card className="w-80 shadow-2xl border-0 backdrop-blur-xl hover:bg-primary-100 dark:hover:bg-primary-900">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={user ? user.imageUrl : ""} altText={user ? user.fullName : "username"} />
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold ">{user && user.fullName}</h3>
                <p className="text-sm text-gray-500">{user && user.emailAddresses[0].emailAddress}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium ">API Key</span>
                <Button variant="ghost" size="small" onClick={() => setShowApiKey(!showApiKey)} className="h-6 px-2">
                  {showApiKey ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                </Button>
              </div>
              <div className="flex items-center gap-2 p-2 backdrop-blur-2xl border dark:border-primary-200/30 border-primary-800/30 rounded-lg">
                <code className="flex-1 text-xs font-mono">{showApiKey ? "aaaaaa" : "••••••••••••••••"}</code>
                <Button variant="ghost" size="small" onClick={copyApiKey} className="h-6 w-6 p-0">
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
            </div>

            <Divider />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium ">Subscription</span>
                <Button
                  variant="ghost"
                  size="small"
                  onClick={() => setShowCountdown(!showCountdown)}
                  className="h-6 px-2 text-xs"
                >
                  {showCountdown ? <Clock className="w-3 h-3 mr-1" /> : <Calendar className="w-3 h-3 mr-1" />}
                  {showCountdown ? "Countdown" : "Date"}
                </Button>
              </div>
              <div className="p-3 backdrop-blur-2xl border dark:border-primary-200/30 border-primary-800/30 rounded-lg">
                <p className="text-sm">
                  {showCountdown ? `${daysLeft} days remaining` : `Ends ${user.subscriptionEnd!.toLocaleDateString()}`}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      }>
        <Avatar className='border size-8.5' onClick={() => setIsOpen(!isOpen)}>
          <AvatarImage
            src={user ? user.imageUrl : ""}
            altText={user ? user.fullname : "username"}
          // name={user ? user.fullname : "username"}
          />
          <AvatarBadge status='active' className='p-0.5 size-3.5 -right-1' iconEnabled {...(isProUser && { icon: <Crown className="text-white t-shadow" /> })} />
        </Avatar>
      </Popover>
    </ >
  )
}

export default UserButton