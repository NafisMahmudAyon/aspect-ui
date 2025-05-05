import { Table, TableBody, TableCell, TableHeadCell, TableHeader, TableRow } from '@/app/src'

const ComponentTable = ({ data }: {
  data: {
    prop: string,
    type: string,
    default: string,
    description: string
  }[]
}) => {
  const codeText = (text: string) => {
    const code = text.split('|').map((line: string, i: number) => {
      // if (i === 0) return line
      if (line.includes('\'')) {
        return (
          <span key={i} className="code group-hover:dark:!bg-primary-100 group-hover:!bg-primary-800 group-hover:dark:!text-primary-800 group-hover:!text-primary-100 transition-colors duration-50">{line}</span>
        )
      }
      return line
    })
    return code
  }
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
          {data && data.map((item, i) => (
            <TableRow key={i} className="border-b border-border group transition-colors duration-50 ">
              <TableCell className="px-4 py-2 whitespace-nowrap">{item.prop}</TableCell>
              <TableCell className="px-4 py-2 max-w-[240px] flex gap-1 flex-wrap">{codeText(item.type)}</TableCell>
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