import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/src'
import React from 'react'

const CardExample = () => {
  return (
    <div>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-text-muted'>This card has a header with title and description, content area, and a footer with actions.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardExample