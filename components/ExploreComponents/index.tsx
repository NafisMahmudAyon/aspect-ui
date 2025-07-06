'use client'
import { cn } from '@/app/src/utils/cn'
import { motion, useAnimation } from 'framer-motion'
import { ArrowUpRight, SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AccordionExample from './AccordionExample'
import AlertExample from './AlertExample'
import AvatarExample from './AvatarExample'
import BackToTopExample from './BackToTopExample'
import ButtonExample from './ButtonExample'
import CardExample from './CardExample'
import CarouselExample from './CarouselExample'
import CheckboxExample from './CheckboxExample'
import CircularProgressBarExample from './CircularProgressBarExample'
import DatePickerExample from './DatePickerExample'
import DividerExample from './DividerExample'
import DropdownExample from './DropdownExample'
import InputExample from './InputExample'
import MasonryExample from './MasonryExample'
import ModalExample from './ModalExample'
import NavbarExample from './NavbarExample'
import PaginationExample from './PaginationExample'
import ProgessBarExample from './ProgessBarExample'
import RadioExample from './RadioExample'
import RatingExample from './RatingExample'
import SidebarExample from './SidebarExample'
import SkeletonExample from './SkeletonExample'
import SliderExample from './SliderExample'
import SpinnerExample from './SpinnerExample'
import StepperExample from './StepperExample'
import SwitchExample from './SwitchExample'
import TableExample from './TableExample'
import TabsExample from './TabsExample'
import TextareaExample from './TextareaExample'
import TimelineExample from './TimelineExample'
import ToggleButtonExample from './ToggleButtonExample'
import TooltipExample from './TooltipExample'
import TypographyExample from './TypographyExample'
import UploadExample from './UploadExample'

const ExploreComponents = () => {
  const examples = [
    {
      id: 1,
      code: <AccordionExample />,
      title: "Accordion",
      link: "accordion",
      class: "md:order-[1]"
    },
    {
      id: 2,
      code: <AlertExample />,
      title: "Alert",
      link: "alert",
      class: "md:order-[2]"
    },
    {
      id: 3,
      code: <AvatarExample />,
      title: "Avatar",
      link: "avatar",
      class: "md:order-[3]"
    },
    {
      id: 4,
      code: <BackToTopExample />,
      title: "BackToTop",
      link: "back-to-top",
      class: "md:order-[4]"
    },
    {
      id: 5,
      code: <ButtonExample />,
      title: "Button",
      link: "button",
      class: "md:order-[5]"
    },
    {
      id: 6,
      code: <CardExample />,
      title: "Card",
      link: "card",
      class: "md:order-[6]"
    },
    {
      id: 7,
      code: <CarouselExample />,
      title: "Carousel",
      link: "carousel",
      class: "md:order-[7]"
    },
    {
      id: 8,
      code: <CheckboxExample />,
      title: "Checkbox",
      link: "checkbox",
      class: "md:order-[8]"
    },
    {
      id: 9,
      code: <CircularProgressBarExample />,
      title: "Circular ProgressBar",
      link: "circular-progress-bar",
      class: "md:order-[9]"
    },
    {
      id: 10,
      code: <DatePickerExample />,
      title: "Date Picker",
      link: "date-picker",
      class: "md:order-[10] row-span-2"
    },
    {
      id: 11,
      code: <DividerExample />,
      title: "Divider",
      link: "divider",
      class: "md:order-[11]"
    },
    {
      id: 12,
      code: <DropdownExample />,
      title: "Dropdown",
      link: "dropdown",
      class: "md:order-[12]"
    },
    {
      id: 13,
      code: <InputExample />,
      title: "Input",
      link: "input",
      class: "md:order-[13]"
    },
    {
      id: 14,
      code: <MasonryExample />,
      title: "Masonry",
      link: "masonry",
      class: "md:order-[14] row-span-2"
    },
    {
      id: 15,
      code: <ModalExample />,
      title: "Modal",
      link: "modal",
      class: "md:order-[15]"
    },
    {
      id: 16,
      code: <NavbarExample />,
      title: "Navbar",
      link: "navbar",
      class: "md:order-[17] xl:order-[16] md:col-span-2"
    },
    {
      id: 17,
      code: <ProgessBarExample />,
      title: "Progress Bar",
      link: "progress-bar",
      class: "md:order-[16] xl:order-[17]"
    },
    {
      id: 18,
      code: <RadioExample />,
      title: "Radio",
      link: "radio",
      class: "md:order-[27] lg:order-[18] xl:order-[18]"
    },
    {
      id: 19,
      code: <PaginationExample />,
      title: "Pagination",
      link: "pagination",
      class: "md:order-[19] md:col-span-2"
    },
    {
      id: 20,
      code: <RatingExample />,
      title: "Rating",
      link: "rating",
      class: "md:order-[20]"
    },
    {
      id: 21,
      code: <SidebarExample />,
      title: "Sidebar",
      link: "sidebar",
      class: "md:order-[21] row-span-2 lg:row-span-3 xl:row-span-2"
    },
    {
      id: 22,
      code: <SkeletonExample />,
      title: "Skeleton",
      link: "skeleton",
      class: "md:order-[22]"
    },
    {
      id: 23,
      code: <SliderExample />,
      title: "Slider",
      link: "slider",
      class: "md:order-[23]"
    },
    {
      id: 24,
      code: <SpinnerExample />,
      title: "Spinner",
      link: "spinner",
      class: "md:order-[24]"
    },
    {
      id: 25,
      code: <StepperExample />,
      title: "Stepper",
      link: "stepper",
      class: "md:order-[25] md:col-span-2 lg:col-span-3 xl:col-span-2"
    },
    {
      id: 26,
      code: <SwitchExample />,
      title: "Switch",
      link: "switch",
      class: "md:order-[26] lg:order-[24] xl:order-[26]"
    },
    {
      id: 27,
      code: <TableExample />,
      title: "Table",
      link: "table",
      class: "md:order-[27] lg:order-[23] xl:order-[29] md:col-span-2"
    },
    {
      id: 28,
      code: <TabsExample />,
      title: "Tabs",
      link: "tabs",
      class: "md:order-[28] xl:order-[27]"
    },
    {
      id: 29,
      code: <TextareaExample />,
      title: "Textarea",
      link: "textarea",
      class: "md:order-[29] xl:order-[28]"
    },
    {
      id: 30,
      code: <TimelineExample />,
      title: "Timeline",
      link: "timeline",
      class: "md:order-[30] row-span-2 md:col-span-2 lg:col-span-3 xl:col-span-2"
    },
    {
      id: 31,
      code: <ToggleButtonExample />,
      title: "Toggle Button",
      link: "toggle-button",
      class: "md:order-[31] lg:order-[29] xl:order-[31]"
    },
    {
      id: 32,
      code: <TooltipExample />,
      title: "Tooltip",
      link: "tooltip",
      class: "md:order-[32] lg:order-[25] xl:order-[32] py-20"
    },
    {
      id: 33,
      code: <TypographyExample />,
      title: "Typography",
      link: "typography",
      class: "md:order-[33] lg:order-[27] xl:order-[33]"
    },
    {
      id: 34,
      code: <UploadExample />,
      title: "Upload",
      link: "upload",
      class: "md:order-[34] lg:order-[27] xl:order-[34]"
    }
  ]
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='container mx-auto py-6 md:py-10 lg:py-16'>
      <h2 className="text-h2 font-bold leading-tight md:text-6xl t-shadow text-center mb-6">Explore Components</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-4 lg:px-6'>
        {examples.map((example, index) => (
          <div key={index} className={cn('bg-gray-200/70 dark:bg-bg-dark/20 p-4 rounded-lg grid place-items-center group relative dark:shadow-gray-200/10 shadow-sm hover:shadow-lg transition-all duration-300', example.class)} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {example.code}
            <HoverEffect title={example.title} link={example.link} isHovered={isHovered} />
            <div className="lg:hidden">
              <Link href={"/docs/components/" + example.link} className='absolute top-4 right-4 text-primary-800 dark:text-primary-200 group/link z-10' >
                <ArrowUpRight className="group-hover/link:opacity-0 group-hover/link:size-0 size-6 opacity-100  block transition-all duration-150 ease-in-out" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const HoverEffect = ({ title, link = "", isHovered }: { title: string, link: string, isHovered: boolean }) => {
  return (
    <div className='group-hover:opacity-100 group-hover:z-[100] transition-all opacity-0 hidden duration-300 absolute inset-0 backdrop-blur-sm bg-primary-800/5 dark:bg-primary-200/5 -z-10 h-full w-full animate-effect rounded-lg group-hover:flex items-center justify-center group'>
      {/* <h1 className='text-center text-white text-h1 relative translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:-translate-x-0 transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100'>{title}</h1> */}
      <AnimatedTitle title={title} isHovered={isHovered} />
      <Link href={"/docs/components/" + link} className='absolute top-4 right-4 text-primary-800 dark:text-primary-200 group/link' >
        <ArrowUpRight className="group-hover/link:opacity-0 group-hover/link:size-0 size-6 opacity-100  block transition-all duration-150 ease-in-out" />
        <SquareArrowOutUpRight className="group-hover/link:block size-0 opacity-0 group-hover/link:size-6 group-hover/link:opacity-100 hidden transition-all duration-500 delay-150 ease-in-out" />
      </Link>
    </div>
  )
}

const AnimatedTitle = ({ title, isHovered }: { title: string, isHovered: boolean }) => {
  const controls = useAnimation()

  useEffect(() => {
    if (isHovered) {
      controls.start({ opacity: 1, x: 0, y: 0 })
    } else {
      controls.start({ opacity: 0, x: 100, y: -100 })
    }
  }, [isHovered, controls])
  return (
    <motion.h1
      className="text-center text-primary-800 dark:text-primary-200 text-shadow-gray-200 t-shadow text-h1 absolute"
      initial={{ opacity: 0, x: -100, y: 100 }}
      animate={controls}
      transition={{ duration: .3, ease: 'easeInOut' }}
    >
      {title}
    </motion.h1>
  )
}


export default ExploreComponents