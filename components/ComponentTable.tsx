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
          <span key={i} className="code group-hover:dark:!bg-primary-100 group-hover:!bg-primary-800 group-hover:dark:!text-primary-800 group-hover:!text-primary-100 transition-colors duration-50">{line.replaceAll('\'', '')}</span>
        )
      }
      return line
    })
    return code
  }
  return (
    <div className='my-4 overflow-auto'>
      <Table className="">
        <TableHeader className="">
          <TableRow className="">
            <TableHeadCell className="font-semibold">Prop</TableHeadCell>
            <TableHeadCell className="font-semibold">Type</TableHeadCell>
            <TableHeadCell className="font-semibold">Default</TableHeadCell>
            <TableHeadCell className="font-semibold">Description</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.map((item, i) => {
            const isMultipleType = item.type.includes('|')
            return(
            <TableRow key={i} className="">
              <TableCell className="whitespace-nowrap">{item.prop}</TableCell>
              <TableCell className={`max-w-[240px] ${isMultipleType ? 'flex gap-1 flex-wrap' : 'text-ellipsis overflow-hidden'}`}>{codeText(item.type)}</TableCell>
              <TableCell className="whitespace-nowrap">{item.default}</TableCell>
              <TableCell className="whitespace-normal">{item.description}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </div>
  )
}

export default ComponentTable