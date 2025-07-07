'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '../../utils/cn'
import {
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList
} from '../Dropdown'
import { Popover, PopoverAction, PopoverContent } from '../Popover'

interface DatePickerProps {
  onChange: (dates: Date[]) => void
  initialDates?: Date[] | string[]
  isRange?: boolean
  shape?: 'rounded-sm' | 'square' | 'circle'
  placeholder?: string
  className?: string
  show?: boolean
  calendarContainerClassName?: string
}

export const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  initialDates = [],
  isRange = false,
  shape = 'circle',
  placeholder = 'Select your date',
  className = '',
  calendarContainerClassName = ''
}) => {
  const [currentDate, setCurrentDate] = useState(() => {
    const initDate =
      Array.isArray(initialDates) && initialDates.length > 0
        ? new Date(initialDates[0])
        : new Date()
    return initDate
  })
  const [selectedDates, setSelectedDates] = useState<Date[]>(
    initialDates.map(date => new Date(date))
  )
  // const [isOpen, setIsOpen] = useState(show)
  const [years, setYears] = useState<number[]>([])

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setYears(Array.from({ length: 201 }, (_, i) => currentYear - 100 + i))
  }, [])

  const daysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const generateCalendar = () => {
    const days = daysInMonth(currentDate)
    const startDay = firstDayOfMonth(currentDate)
    const calendarDays = []

    for (let i = 0; i < startDay; i++) {
      calendarDays.push(null)
    }

    for (let i = 1; i <= days; i++) {
      calendarDays.push(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
      )
    }

    return calendarDays
  }

  const handleDateClick = (date: Date) => {
    let newDates: Date[] = []

    if (isRange) {
      if (selectedDates.length === 0) {
        newDates = [date]
      } else if (selectedDates.length === 1) {
        newDates = [selectedDates[0], date].sort(
          (a, b) => a.getTime() - b.getTime()
        )
      } else if (selectedDates.length === 2) {
        if (
          date.getTime() === selectedDates[0].getTime() ||
          date.getTime() === selectedDates[1].getTime()
        ) {
          newDates = []
        } else if (date > selectedDates[0] && date < selectedDates[1]) {
          newDates = [selectedDates[0], date]
        } else if (date < selectedDates[0]) {
          newDates = [date, selectedDates[1]]
        } else {
          newDates = [selectedDates[0], date]
        }
      }
    } else {
      newDates = [date]
    }

    setSelectedDates(newDates)
    onChange(newDates)
  }

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    )
  }

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    )
  }

  const formatDate = (date: Date): string => {
    const day = date.getDate()
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    const suffix = ['th', 'st', 'nd', 'rd'][
      day % 10 > 3 ? 0 : (day % 100) - (day % 10) != 10 ? day % 10 : 0
    ]
    return `${month} ${day}${suffix}, ${year}`
  }

  const formatDateRange = (dates: Date[]): string => {
    if (dates.length === 0) return placeholder
    if (dates.length === 1) return formatDate(dates[0])
    if (isRange && dates.length === 2) {
      return `${formatShortDate(dates[0])} - ${formatShortDate(dates[1])}`
    }
    return formatDate(dates[0])
  }

  const formatShortDate = (date: Date): string => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    return `${monthNames[date.getMonth()]} ${date.getDate().toString().padStart(2, '0')}, ${date.getFullYear()}`
  }
  return (
    <div className='relative'>
      <Popover>
        <PopoverAction
          className={cn(
            'border-border bg-bg focus-visible:outlined w-full rounded-md border px-4 py-2 outline-hidden',
            className
          )}
        >
          {/* <span
            // type='text'
            className={cn('w-full rounded-md border border-border px-4 py-2 bg-bg outline-hidden focus-visible:outlined', className)}
            // readOnly
            // value={formatDateRange(selectedDates)}
            // onClick={() => setIsOpen(!isOpen)}
            // placeholder={placeholder}
            {...rest}
          > */}
          {formatDateRange(selectedDates)}
          {/* </span> */}
        </PopoverAction>
        <PopoverContent className='w-auto p-0'>
          <div
            className={cn(
              'bg-bg rounded-md p-4 shadow-lg',
              calendarContainerClassName
            )}
          >
            <div className='flex items-center justify-between gap-2 py-2'>
              <button
                onClick={handlePrevMonth}
                className={cn(
                  'border-border border p-1',
                  shape === 'circle'
                    ? 'rounded-full'
                    : shape === 'rounded-sm'
                      ? 'rounded-md'
                      : ''
                )}
              >
                <ChevronLeft />
              </button>
              <div className='flex flex-1 justify-center gap-3'>
                <Dropdown>
                  <DropdownAction className=''>
                    {monthNames[currentDate.getMonth()]}
                  </DropdownAction>
                  <DropdownContent>
                    <DropdownList>
                      {monthNames.map((month, index) => (
                        <DropdownItem
                          className={`${currentDate.getMonth() == index ? 'bg-bg-light' : ''}`}
                          key={month}
                          onClick={() => {
                            const cDate = new Date()
                            if (cDate.getMonth() === index) {
                              setCurrentDate(
                                new Date(
                                  currentDate.getFullYear(),
                                  index,
                                  cDate.getDate()
                                )
                              )
                            } else
                              setCurrentDate(
                                new Date(currentDate.getFullYear(), index, 1)
                              )
                          }}
                        >
                          {month}
                        </DropdownItem>
                      ))}
                    </DropdownList>
                  </DropdownContent>
                </Dropdown>
                <Dropdown>
                  <DropdownAction className=''>
                    {currentDate.getFullYear()}
                  </DropdownAction>
                  <DropdownContent
                    className='overflow-y-auto'
                    style={{ maxHeight: '300px' }}
                  >
                    <DropdownList>
                      {years.map(year => (
                        <DropdownItem
                          className={``}
                          activeClassName='bg-bg-light'
                          key={year}
                          onClick={() => {
                            if (
                              year == new Date().getFullYear() &&
                              currentDate.getMonth() == new Date().getMonth()
                            ) {
                              const cDate = new Date()
                              setCurrentDate(
                                new Date(
                                  year,
                                  cDate.getMonth(),
                                  cDate.getDate()
                                )
                              )
                            } else
                              setCurrentDate(
                                new Date(year, currentDate.getMonth(), 1)
                              )
                          }}
                          isSelected={year === currentDate.getFullYear()}
                        >
                          {year}
                        </DropdownItem>
                      ))}
                    </DropdownList>
                  </DropdownContent>
                </Dropdown>
              </div>
              <button
                onClick={handleNextMonth}
                className={cn(
                  'border-border border p-1',
                  shape === 'circle'
                    ? 'rounded-full'
                    : shape === 'rounded-sm'
                      ? 'rounded-md'
                      : ''
                )}
              >
                <ChevronRight />
              </button>
            </div>
            <div className='grid grid-cols-[repeat(7,minmax(2rem,1fr))] gap-1'>
              <div className='border-border col-start-1 col-end-8 grid grid-cols-[repeat(7,minmax(2rem,1fr))] gap-1 border-t border-b'>
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div
                    key={day}
                    className='flex size-8 items-center justify-center text-center text-sm font-bold'
                  >
                    {day}
                  </div>
                ))}
              </div>
              {generateCalendar().map((date, index) => (
                <button
                  key={index}
                  onClick={() => date && handleDateClick(date)}
                  className={cn(
                    'h-8 w-8 text-center',
                    shape === 'circle'
                      ? 'rounded-full'
                      : shape === 'rounded-sm'
                        ? 'rounded-md'
                        : '',
                    !date && 'invisible',
                    date && 'hover:bg-primary hover:text-bg-light',
                    date &&
                      date.getDate() === currentDate.getDate() &&
                      ((isRange && selectedDates.length < 2) ||
                        (!isRange && selectedDates.length === 0)) &&
                      'bg-bg-light',
                    date &&
                      selectedDates.some(
                        d => d.toDateString() === date.toDateString()
                      ) &&
                      'bg-primary text-bg-light',
                    date &&
                      isRange &&
                      selectedDates.length === 2 &&
                      date > selectedDates[0] &&
                      date < selectedDates[1] &&
                      'bg-primary text-bg-light'
                  )}
                >
                  {date ? date.getDate() : ''}
                </button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
