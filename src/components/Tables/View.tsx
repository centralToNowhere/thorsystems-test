import './style.scss'

import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'

import { TableChecker } from '@/components/TableChecker'
import { TableControls } from '@/components/TableControls'
import { TableType } from '@/store/models/table'

interface TablesViewType {
  tables: TableType[]
  selectedTable: TableType | null
}

export const TableViewBase = ({ tables, selectedTable }: TablesViewType) => {
  return (
    <div className={'tables'}>
      <span className={'cafe__section-title'}>Tables</span>
      <div className={'tables__list'}>
        {tables.map(table => {
          const tableClassNames = classNames({
            tables__item: true,
            tables__item_selected: selectedTable && table.id === selectedTable.id,
          })

          return (
            <div className={tableClassNames} key={table.id}>
              <p>{table.number}</p>
            </div>
          )
        })}
      </div>
      <TableChecker />
      <TableControls />
    </div>
  )
}

export const TablesView = observer(TableViewBase)
