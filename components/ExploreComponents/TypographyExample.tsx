import { Typography } from '@/app/src'

const TypographyExample = () => {
  return (
    <div>
      <Typography variant='display1'>Display 1</Typography>
      <Typography variant='display2'>Display 2</Typography>
      <Typography variant='h2'>heading 2</Typography>
      <Typography variant='body1'>body text</Typography>
      <Typography variant='caption' className='text-gray-500'>
        This is a caption
      </Typography>
    </div>
  )
}

export default TypographyExample