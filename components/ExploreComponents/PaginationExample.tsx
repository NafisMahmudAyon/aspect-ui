'use client'
import { Pagination } from '@/app/src'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(3)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <div>
      <Pagination
        count={6}
        defaultPage={currentPage}
        boundaryCount={2}
        siblingCount={1}
        // showFirstLast={true}
        showNextPrev={true}
        numberType='roman'
        nextButton={<span className='flex items-center gap-2'>Next<ChevronRight /></span>}
        previousButton={<span className='flex items-center gap-2'><ChevronLeft />Previous</span>}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default PaginationExample