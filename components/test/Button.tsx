
'use client'
import { Button } from '@/app/src/components/Button'
import { Star } from '@/app/src/components/Icon/Star'
import React from 'react'

const ButtonDemo = () => {
  // const [isModalOpen, setModalOpen] = useState(false)

  // const handleAddTask = () => {
  //   setModalOpen(true)
  // }
  return (
    <div className='flex gap-3 flex-col items-start'>
      {/* Primary Button */}
      <Button variant='primary' onClick={() => alert('Primary Button Clicked')}>
        Primary Button
      </Button>

      {/* Secondary Button */}
      <Button
        variant='secondary'
        onClick={() => alert('Secondary Button Clicked')}
      >
        Secondary Button
      </Button>

      {/* Destructive Button */}
      <Button
        variant='success'
        onClick={() => alert('Destructive Button Clicked')} loading={true}
      >
        Success Button
      </Button>
      <Button
        variant='warning'
        onClick={() => alert('Destructive Button Clicked')}
      >
        Warning Button
      </Button>

      {/* Link Button */}
      <Button variant='link' onClick={() => alert('Link Button Clicked')}>
        Link Button
      </Button>

      {/* Outline Button */}
      <Button variant='outline' onClick={() => alert('Outline Button Clicked')}>
        Outline Button
      </Button>

      {/* Ghost Button */}
      <Button variant='ghost' onClick={() => alert('Ghost Button Clicked')}>
        Ghost Button
      </Button>

      {/* Icon Button */}
      <Button
        variant='icon'
        icon={<Star />}
        aria-label='Icon Button'
      />

      {/* Button with Icon (Icon on Left) */}
      <Button
        variant='withIcon'
        icon={<Star />}
        iconPosition='left'
      >
        With Icon Left
      </Button>

      {/* Button with Icon (Icon on Right) */}
      <Button
        variant='withIcon'
        icon={<Star />}
        iconPosition='right'
      >
        With Icon Right
      </Button>

      {/* Loading Button */}
      <Button variant='primary' loading>
        Loading...
      </Button>

      {/* Disabled Button */}
      <Button variant='primary' disabled>
        Disabled Button
      </Button>

      {/* Floating Action Button (FAB) */}
      {/* <Button
        variant='primary'
        // isFab
        icon={<span className='material-icons'>add</span>}
        aria-label='FAB'
      /> */}

      {/* Add Task Modal */}
      {/* {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50'>
          <div className='rounded-lg bg-white p-6 shadow-lg'>
            <h2 className='mb-4 text-xl font-semibold'>Add New Task</h2>
            <input
              type='text'
              className='mb-4 w-full border p-2'
              placeholder='Task Name'
            />
            <textarea
              className='mb-4 w-full border p-2'
              placeholder='Task Description'
            ></textarea>
            <button
              className='rounded-sm bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
              onClick={() => setModalOpen(false)}
            >
              Add Task
            </button>
          </div>
        </div>
      )}
      <h1 className='text-base text-h1 text-headingColor dark:text-headingColor-dark'>
        Hello lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        tenetur aliquam ipsam fugit, doloribus debitis iusto consequatur quidem
        sed consequuntur. Alias deleniti, corporis accusantium facere dicta
        nostrum non inventore voluptatibus.
      </h1> */}
    </div>
  )
}

export default ButtonDemo
