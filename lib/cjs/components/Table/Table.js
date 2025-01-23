// 'use client';
// import React, { useState } from 'react';
// interface TableProps {
//   data: any[];
//   columns: { key: string; label: string }[];
//   itemsPerPage?: number;
//   stickyHeader?: boolean;
//   stickyColumns?: number;
//   striped?: boolean;
//   hoverable?: boolean;
// }
// export const Table: React.FC<TableProps> = ({
//   data,
//   columns,
//   itemsPerPage = 10,
//   stickyHeader = false,
//   stickyColumns = 0,
//   striped = false,
//   hoverable = false,
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentData = data.slice(startIndex, endIndex);
//   const tableClasses = [
//     'w-full',
//     'border-collapse',
//     'border',
//     'border-gray-300',
//     striped ? 'striped' : '',
//     hoverable ? 'hoverable' : '',
//   ].join(' ');
//   return (
//     <div className="overflow-x-auto">
//       <table className={tableClasses}>
//         <thead className={stickyHeader ? 'sticky top-0 bg-white z-10' : ''}>
//           <tr>
//             {columns.map((column, index) => (
//               <th
//                 key={column.key}
//                 className={`
//                   p-2
//                   border
//                   border-gray-300
//                   ${index < stickyColumns ? 'sticky left-0 bg-white z-20' : ''}
//                 `}
//               >
//                 {column.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {currentData.map((row, rowIndex) => (
//             <tr key={rowIndex} className={striped && rowIndex % 2 === 0 ? 'bg-gray-100' : ''}>
//               {columns.map((column, colIndex) => (
//                 <td
//                   key={`${rowIndex}-${column.key}`}
//                   className={`
//                     p-2
//                     border
//                     border-gray-300
//                     ${colIndex < stickyColumns ? 'sticky left-0 bg-white z-10' : ''}
//                   `}
//                 >
//                   {row[column.key]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between items-center">
//         <button
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-blue-500 text-white rounded-sm disabled:bg-gray-300"
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-blue-500 text-white rounded-sm disabled:bg-gray-300"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };
// ./app/src/components/Table/Table.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { TableProvider } from './TableContext';
import { cn } from '../../utils/cn';
export const Table = ({ children, className = '', ...rest }) => {
    return (_jsx(TableProvider, { children: _jsx("div", { className: 'relative w-full overflow-auto', children: _jsx("table", { className: cn("relative w-full overflow-hidden", className), ...rest, children: children }) }) }));
};
