'use client'
import { Pagination } from '@/app/src'
import { useState } from 'react'

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(6)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <div>
      <Pagination
        count={10}
        defaultPage={currentPage}
        boundaryCount={2}
        siblingCount={1}
        showFirstLast={true}
        showNextPrev={true}
        numberType='roman'
        onChange={handlePageChange}
      />
    </div>
  )
}

export default PaginationExample