import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const TableCell: FC<ITableCell> = memo(
  ({ column, index, item, columns }) => {
    return (
      <div
        className={classNames(
          'flex items-center',
          index === columns.length - 1 ? ' justify-end' : 'justify-start',
          column.width
        )}
      >
        {column.render ? (
          column.render(item)
        ) : (
          <span className={classNames('text-gray-800 dark:text-gray-100')}>
            {item[column.accessor]}
          </span>
        )}
      </div>
    )
  }
)
