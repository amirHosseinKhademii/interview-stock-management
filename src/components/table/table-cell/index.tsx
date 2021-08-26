import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const TableCell: FC<ITableCell> = memo(
  ({ column, index, item, columns }) => {
    return (
      <td
        className={classNames(
          'flex items-center text-gray-800 dark:text-gray-100',
          index === columns.length - 1 ? ' justify-end' : 'justify-start',
          column.width
        )}
      >
        {column.render ? column.render(item) : item[column.accessor]}
      </td>
    )
  }
)
