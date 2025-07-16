'use client'
import { DatePicker } from '@/app/src'

const DefaultDatePicker = () => {
  return (
    <DatePicker onChange={(dates: Date[]) => console.log(dates)} />
  )
}

export default DefaultDatePicker