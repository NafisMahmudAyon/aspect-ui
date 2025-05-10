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

const ExploreComponents = () => {
  const examples = [
    {
      code: <AccordionExample />,
      title: "Accordion",
      link: "accordion"
    },
    {
      code: <AlertExample />,
      title: "Alert",
      link: "alert"
    },
    {
      code: <AvatarExample />,
      title: "Avatar",
      link: "avatar"
    },
    {
      code: <BackToTopExample />,
      title: "BackToTop",
      link: "back-to-top"
    },
    {
      code: <ButtonExample />,
      title: "Button",
      link: "button"
    },
    {
      code: <CardExample />,
      title: "Card",
      link: "card"
    },
    {
      code: <CarouselExample />,
      title: "Carousel",
      link: "carousel"
    },
    {
      code: <CheckboxExample />,
      title: "Checkbox",
      link: "checkbox"
    },
    {
      code: <CircularProgressBarExample />,
      title: "Circular ProgressBar",
      link: "circular-progress-bar"
    },
    {
      code: <DatePickerExample />,
      title: "Date Picker",
      link: "date-picker"
    },
    {
      code: <DividerExample />,
      title: "Divider",
      link: "divider"
    },
    {
      code: <DropdownExample />,
      title: "Dropdown",
      link: "dropdown"
    },
    {
      code: <InputExample />,
      title: "Input",
      link: "input"
    },
    {
      code: <MasonryExample />,
      title: "Masonry",
      link: "masonry"
    },
    {
      code: <ModalExample />,
      title: "Modal",
      link: "modal"
    },
    {
      code: <NavbarExample />,
      title: "Navbar",
      link: "navbar"
    },
    {
      code: <ProgessBarExample />,
      title: "Progress Bar",
      link: "progress-bar"
    },
    {
      code: <RadioExample />,
      title: "Radio",
      link: "radio"
    },
    {
      code: <PaginationExample />,
      title: "Pagination",
      link: "pagination"
    },
    {
      code: <RatingExample />,
      title: "Rating",
      link: "rating"
    },
    {
      code: <SidebarExample />,
      title: "Sidebar",
      link: "sidebar"
    },
    {
      code: <SkeletonExample />,
      title: "Skeleton",
      link: "skeleton"
    },
    {
      code: <SliderExample />,
      title: "Slider",
      link: "slider"
    },
    {
      code: <SpinnerExample />,
      title: "Spinner",
      link: "spinner"
    },
    {
      code: <StepperExample />,
      title: "Stepper",
      link: "stepper"
    },
    {
      code: <SwitchExample />,
      title: "Switch",
      link: "switch"
    },
    {
      code: <TableExample />,
      title: "Table",
      link: "table"
    },
    {
      code: <TabsExample />,
      title: "Tabs",
      link: "tabs"
    } 
  ]
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 container mx-auto px-3'>
      {examples.map((example, index) => (
        <div key={index} className={cn('bg-gray-200/70 dark:bg-gray-800/50 p-4 rounded-lg grid place-items-center w-full group relative dark:shadow-gray-200/10 shadow-sm hover:shadow-lg transition-all duration-300', (example.title === "Date Picker" || example.title === "Masonry" || example.title === "Sidebar") && "row-span-2", (example.title === "Navbar" || example.title === "Pagination" || example.title === "Stepper" || example.title === "Table") && "md:col-span-2")} onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {example.code}
          <HoverEffect title={example.title} link={example.link} isHovered={isHovered} />
        </div>
      ))}
    </div>
  )
}

const HoverEffect = ({ title, link = "", isHovered }: { title: string, link: string, isHovered: boolean }) => {
  return (
    <div className='group-hover:opacity-100 group-hover:z-10 transition-all opacity-0 duration-300 absolute inset-0 backdrop-blur-sm bg-primary-800/5 dark:bg-primary-200/5 -z-10 h-full w-full animate-effect rounded-lg flex items-center justify-center group'>
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