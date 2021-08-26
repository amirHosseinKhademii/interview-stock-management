import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const TableHead: FC<ITableHead> = memo(({ columns, loading }) => {
  return (
    <div className="w-full flex flex-col">
      <div
        className={classNames(
          'w-full row-start  py-4 px-6  rounded-t border-b-2  border-secondary dark:border-primary',
          loading && 'animate-pulse200'
        )}
      >
        {(columns || []).map((column, index) => (
          <div
            className={classNames(
              'flex items-center ',
              index === columns.length - 1 ? ' justify-end' : 'justify-start',
              column.width
            )}
            key={index}
          >
            <span
              className={classNames('text-secondary dark:text-primary text-sm')}
            >
              {column.head}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})
