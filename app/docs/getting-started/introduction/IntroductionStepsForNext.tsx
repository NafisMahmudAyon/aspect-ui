import CodeSnippet from '@/components/CodeSnippet'
import { Timeline, TimelineItem } from '@/app/src'
import { aspectInstall, nextJsInstall, twConfigForNextJS, twCssForNext } from './Code/Code'

const IntroductionStepsForNext = () => {
  return (
    <Timeline position='right' className="my-12 px-6">
      <TimelineItem className="w-full relative" containerClassName='bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none' dotClassName="top-0">
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 1</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Create a NextJS application</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
          Ensure that you select <span className="code">tailwindcss</span> as a dependency for your application during the setup.
          </p>
          <div className="!my-4">
          <CodeSnippet lang='bash' content={nextJsInstall} />
          </div>
      </TimelineItem>
      <TimelineItem className="max-w-full relative" containerClassName='bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none' dotClassName="top-0">
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 2</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Install Aspect UI library</h1>
          <div className="!my-4">
          <CodeSnippet lang='bash' content={aspectInstall} />
          </div>
      </TimelineItem>
      <TimelineItem className="max-w-full relative" containerClassName='bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none' dotClassName="top-0">
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 3</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Configure Tailwind CSS</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
          Open the <span className="code">tailwind.config.js</span> file in your project. Wrap your config with the AspectUITheme function to achieve
            aspect-ui configuration.
          </p>
          <div className="!my-4">
          <CodeSnippet lang='javascript' content={twConfigForNextJS} />
          </div>
      </TimelineItem>
      <TimelineItem className="max-w-full relative" containerClassName='bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none' dotClassName="top-0">
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 4</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
          Add Tailwind CSS to <span className="code">app/globals.css</span> File
          </h1>
        <div className="!my-4">
          <CodeSnippet lang='css' content={twCssForNext} />
        </div>
      </TimelineItem>
    </Timeline>
  )
}

export default IntroductionStepsForNext
