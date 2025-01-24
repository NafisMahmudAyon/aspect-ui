import { Avatar, AvatarGroup, AvatarImage } from '@/app/src'
import { Button } from '@/app/src/components/Button'
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/app/src/components/Card'
import React from 'react'

const CardDemo = () => {
  return (
    <div className='space-y-4'>
      <Card className='relative w-[350px]'>
        <a href='https://nafisbd.com' className='absolute inset-0 z-10' />
        <CardHeader className=''>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent className=' '>
          {/* Add your content here */}jghj
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            variant='outline'
            className='relative z-20 text-buttonTextColor-dark'
          >
            Cancel
          </Button>
          <Button className='relative z-20 bg-buttonBGColor text-buttonTextColor-light hover:bg-buttonBGColor-hover'>
            Deploy
          </Button>
        </CardFooter>
      </Card>
      <Card className="max-w-md">
        <CardContent>
          <CardTitle>Aspect UI design system</CardTitle>
          <CardDescription>
            Component design systems can help developers to be more productive by providing them with a ready-made set of
            components to use.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="max-w-md">
        <CardContent>
          <CardTitle>Our Contributors</CardTitle>
          <CardDescription>They help us to grow up the Aspect UI react component library</CardDescription>
          <AvatarGroup className="mt-3">
            <Avatar className="size-14">
              <AvatarImage name='A' />
            </Avatar>
            <Avatar className="size-14">
              <AvatarImage name='A' />
            </Avatar>
            <Avatar className="size-14">
              <AvatarImage name='A' />
            </Avatar>
            <Avatar className="size-14">
              <AvatarImage name='A' />
            </Avatar>
            <Avatar className="size-14">
              <AvatarImage name='A' />
            </Avatar>
          </AvatarGroup>
        </CardContent>
      </Card>

      <Card className="max-w-md">
        <CardHeader>
          <img src="https://react.keepdesign.io/_next/image?url=%2Fimages%2Fkeep-card.jpg&w=640&q=75" className="rounded-t-xl" alt="image" width={600} height={300} />
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle>Lorem ipsum dolor sit</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
          </CardDescription>
          <Button>Buy Now</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardDemo
