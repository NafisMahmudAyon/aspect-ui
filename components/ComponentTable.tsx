import { Table, TableBody, TableCell, TableHeadCell, TableHeader, TableRow } from '@/app/src'
import React from 'react'

const ComponentTable = ({data}:{data: {
  prop: string,
  type: string,
  default: string,
  description: string
}[]}) => {
  return (
    <div className='my-4'>
      <Table className="w-full text-sm text-left border border-border rounded-lg">
        <TableHeader className="bg-muted">
          <TableRow className="border-b border-border">
            <TableHeadCell className="px-4 py-2 font-semibold">Prop</TableHeadCell>
            <TableHeadCell className="px-4 py-2 font-semibold">Type</TableHeadCell>
            <TableHeadCell className="px-4 py-2 font-semibold">Default</TableHeadCell>
            <TableHeadCell className="px-4 py-2 font-semibold">Description</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.map((item,i) => (
            <TableRow key={i} className="border-b border-border">
              <TableCell className="px-4 py-2 whitespace-nowrap">{item.prop}</TableCell>
              <TableCell className="px-4 py-2 whitespace-nowrap">{item.type}</TableCell>
              <TableCell className="px-4 py-2 whitespace-nowrap">{item.default}</TableCell>
              <TableCell className="px-4 py-2">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ComponentTable