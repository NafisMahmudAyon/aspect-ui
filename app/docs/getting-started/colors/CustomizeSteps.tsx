import { Timeline, TimelineItem } from '@/app/src'
import {
  customizeColors,
  customizeSingleColor,
  forbiddenRoles
} from './ColorsApi'
import CodeSnippet from '@/components/CodeSnippet'

const CustomizeSteps = () => {
  return (
    <Timeline className='my-12 ml-2'>
      <TimelineItem className='max-w-full'>
        {/* <TimelinePoint /> */}
        {/* <TimelineContent> */}
        <p className='text-body-5 text-metal-400 dark:text-metal-300 leading-[1.4] font-normal'>
          tailwind.config.ts
        </p>
        <h1 className='text-body-3 text-metal-900 font-medium dark:text-white'>
          Open your tailwind.config.ts file.
        </h1>
        <p className='text-body-4 text-metal-600 dark:text-metal-300 font-normal'>
          Pass your custom color palette as the second argument of the keepTheme
          function.
        </p>
        <div className='!my-4'>
          <CodeSnippet content={customizeColors} />
        </div>
        {/* </TimelineContent> */}
      </TimelineItem>
      <TimelineItem className='max-w-full'>
        {/* <TimelinePoint />
        <TimelineContent> */}
        <p className='text-body-5 text-metal-400 dark:text-metal-300 leading-[1.4] font-normal'>
          Single Color
        </p>
        <h1 className='text-body-3 text-metal-900 font-medium dark:text-white'>
          Customize Single Color
        </h1>
        <p className='text-body-4 text-metal-600 dark:text-metal-300 font-normal'>
          If you don&apos;t need to change all the color accept one color. You
          can also do it by following this example below.
        </p>
        <div className='!my-4'>
          <CodeSnippet content={customizeSingleColor} />
        </div>
        {/* </TimelineContent> */}
      </TimelineItem>
      <TimelineItem className='max-w-full'>
        {/* <TimelinePoint />
        <TimelineContent> */}
        <p className='text-body-5 text-metal-400 dark:text-metal-300 leading-[1.4] font-normal'>
          Important Note
        </p>
        <h1 className='text-body-3 text-metal-900 font-medium dark:text-white'>
          Don&apos;t do this
        </h1>
        <p className='text-body-4 text-metal-600 dark:text-metal-300 font-normal'>
          You cannot change the names of the colors, but you can only change
          their color hex codes. But if you want to extend the color palette
          with your own colors, then you can do it. See the example below for
          more information.
        </p>
        <div className='!my-4'>
          <CodeSnippet content={forbiddenRoles} />
        </div>
        {/* </TimelineContent> */}
      </TimelineItem>
    </Timeline>
  )
}

export default CustomizeSteps
