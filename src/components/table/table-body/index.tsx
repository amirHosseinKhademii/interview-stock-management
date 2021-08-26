import { classNames } from 'utils/classes'
import { TableHead } from '../table-head'
import { TableRow } from '../table-row'

export const TableBody = ({ columns, loading, page, data, prepareRow }) => {
  return (
    <tbody
      className={classNames('w-full flex flex-col items-center ')}
      slot="wrapper"
    >
      <TableHead columns={columns} loading={loading} />

      {loading && (!page || page.length === 0) ? (
        Array.from(new Array(10)).map((item, index) => (
          <TableRow
            key={index}
            item={item}
            columns={columns}
            index={index}
            loading={loading}
          />
        ))
      ) : page && page.length > 0 ? (
        (page || []).map((item, index) => {
          prepareRow(item)
          return (
            <TableRow
              key={index}
              item={item}
              columns={columns}
              index={index}
              loading={loading}
              length={data.length}
            />
          )
        })
      ) : (
        <tr className="text-gray-600 pt-6 text-lg">No items</tr>
      )}
    </tbody>
  )
}
