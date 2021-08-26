import { FC, memo, useMemo } from 'react'
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table'
import { classNames } from 'utils/classes'

import { TablePagination } from './table-pagination'
import { TableToolbar } from './table-toolbar'
import { TableBody } from './table-body'

export const Table: FC<ITable> = memo(
  ({ className, columns, data, expand, loading, title, onRowClick }) => {
    const memoColumns = useMemo(() => columns, [])
    const memoData = useMemo(() => data || [], [data])

    const {
      state: { pageIndex },
      page,
      pageCount,
      setGlobalFilter,
      gotoPage,
    } = useTable(
      {
        columns: memoColumns,
        data: memoData,
      },
      useGlobalFilter,
      usePagination
    )

    // const onChange = useAsyncDebounce((value) => {
    //   setGlobalFilter(value || undefined)
    // }, 200)

    return (
      <div
        className={classNames('w-full flex flex-col items-end p-4 ', className)}
      >
        <TableToolbar title={title} onChange={() => {}} />

        <TableBody
          columns={columns}
          loading={loading}
          page={page}
          expand={expand}
          data={data}
          onRowClick={onRowClick}
        />

        <TablePagination
          pageCount={pageCount}
          page={pageIndex}
          gotoPage={gotoPage}
        />
      </div>
    )
  }
)
