import React from 'react'

import { TableModelType } from '@/store/models/table/Table'

export type CafeViewType = {
  tables: TableModelType[]
}

const renderTables = (tables: TableModelType[]) => {
  return (
    <>
      {tables.map(table => {
        return (
          <div key={table.id}>
            <p>Table number: {table.number}</p>
            <p>{table.occupied ? 'Occupied!' : 'Table is free'}</p>
          </div>
        )
      })}
    </>
  )
}

export const CafeView = ({ tables }: CafeViewType) => {
  return <div>{renderTables(tables)}</div>
}
