import { Typography } from '@/app/src'

const TypographyExample = () => {
  return (
    <div>
      <Typography variant='display-1'>Display 1</Typography>
      <Typography variant='display-2'>Display 2</Typography>
      <Typography variant='h2'>heading 2</Typography>
      <Typography variant='body-1'>body text</Typography>
      <Typography variant='caption' className='text-gray-500'>
        This is a caption
      </Typography>
    </div>
  )
}

export default TypographyExample