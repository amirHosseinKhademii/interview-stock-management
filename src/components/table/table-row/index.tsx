import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

import { TableCell } from '../table-cell'

export const TableRow: FC<ITableRow> = memo(
  ({ item, columns, loading, index, length }) => {
    if (item)
      return (
        <tr
          className={classNames(
            'w-full flex  overflow-hidden border-gray-700  text-sm row-start h-12 px-6 hover:bg-gray-700',
            loading ? 'opacity-50 ' : 'group',
            index === length - 1 ? '' : 'border-b'
          )}
        >
          {(columns || []).map((column, index) => (
            <TableCell
              key={index}
              item={item.original}
              index={index}
              column={column}
              columns={columns}
            />
          ))}
        </tr>
      )
    else return null
  }
)
