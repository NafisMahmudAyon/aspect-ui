import { Card, CardContent } from '@/app/src'

export default function DefaultCard() {
  return (
    <Card className='max-w-md'>
      <CardContent>
        <p>
          This is a basic card with some content. Cards can be used to group
          related information and actions.
        </p>
      </CardContent>
    </Card>
  )
}
