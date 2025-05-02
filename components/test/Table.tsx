import {
  Table,
  TableBody,
  TableCaption,
  TableFooter,
  TableHeader,
  TableRow
} from '@/app/src/components/Table'
import { TableCell } from '@/app/src/components/Table/TableCell'
import { TableHeadCell } from '@/app/src/components/Table/TableHeadCell'
import React from 'react'

const TableDemo = () => {
  // const data = [
  //   { id: 1, name: 'John Doe', age: 30 },
  //   { id: 2, name: 'Jane Smith', age: 25 }
  //   // ... more data
  // ]

  // const columns = [
  //   { key: 'id', label: 'ID' },
  //   { key: 'name', label: 'Name' },
  //   { key: 'age', label: 'Age' }
  // ]
  return (
    <div>
      {/* <Table
        data={data}
        columns={columns}
        itemsPerPage={5}
        stickyHeader={true}
        stickyColumns={1}
        striped={true}
        hoverable={true}
      /> */}

      <Table>
        <TableCaption>Example Table Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeadCell>Header 1</TableHeadCell>
            <TableHeadCell>Header 2</TableHeadCell>
            <TableHeadCell>Header 3</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='whitespace-nowrap'>Row 1, Cell 1 fdgdfgdg dgfdgfdg</TableCell>
            <TableCell className='whitespace-nowrap'>Row 1, Cell 2</TableCell>
            <TableCell className='whitespace-nowrap'>Row 1, Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='whitespace-nowrap'>Row 2, Cell 1</TableCell>
            <TableCell className='whitespace-nowrap'>Row 2, Cell 2</TableCell>
            <TableCell className='whitespace-nowrap'>Row 2, Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='whitespace-nowrap'>Row 1, Cell 1</TableCell>
            <TableCell className='whitespace-nowrap'>Row 1, Cell 2</TableCell>
            <TableCell className='whitespace-nowrap'>Row 1, Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='whitespace-nowrap'>Row 2, Cell 1</TableCell>
            <TableCell className='whitespace-nowrap'>Row 2, Cell 2</TableCell>
            <TableCell className='whitespace-nowrap'>Row 2, Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='whitespace-nowrap'>Row 1, Cell 1</TableCell>
            <TableCell className='whitespace-nowrap'>Row 1, Cell 2</TableCell>
            <TableCell className='whitespace-nowrap'>Row 1, Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='whitespace-nowrap'>Row 2, Cell 1</TableCell>
            <TableCell className='whitespace-nowrap'>Row 2, Cell 2</TableCell>
            <TableCell className='whitespace-nowrap'>Row 2, Cell 3</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Footer content</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default TableDemo
