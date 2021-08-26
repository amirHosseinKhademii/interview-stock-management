import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import { TableHead } from '../table-head'
import { TableRow } from '../table-row'

export const TableBody: FC<ITable> = memo(
  ({ columns, loading, page, data, prepareRow }) => {
    return (
      <tbody className={classNames('w-full flex flex-col items-center ')}>
        <TableHead columns={columns} loading={loading} />

        {page && page.length > 0 ? (
          (page || []).map((row, index) => {
            prepareRow(row)
            return (
              <TableRow
                key={row.id}
                row={row}
                columns={columns}
                index={index}
                loading={loading}
                length={data.length}
              />
            )
          })
        ) : loading ? (
          <tr className="text-gray-600 pt-6 text-lg">Loading</tr>
        ) : (
          <tr className="text-gray-600 pt-6 text-lg">No items</tr>
        )}
      </tbody>
    )
  }
)
