'use client'
import { DatePicker } from '@/app/src'
import React from 'react'

const DatePickerExample = () => {
  const handleDateChange = (dates: Date[]) => {
    console.log('Selected date:', dates)
  }
  return (
    <div>
      <DatePicker
        onChange={handleDateChange}
        show={true}
        isRange={true}
        initialDates={[
          new Date(),
          new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
        ]}
        calendarContainerClassName="relative z-0"
      />
    </div>
  )
}

export default DatePickerExample