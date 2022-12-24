import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'

import { TableType } from '@/store/models/table'
import { useStore } from '@/store/store'

import { TableCheckerView } from './View'

export const TableChecker = observer(() => {
  const store = useStore()
  const { tables, selectedTable, occupiedTable } = store
  const searchLabel = 'Check table status'

  const searchResults = {
    TABLE_OCCUPIED: 'OCCUPIED',
    TABLE_OCCUPIED_BY_YOU: 'OCCUPIED BY YOU!',
    TABLE_FREE: 'TABLE IS FREE',
  }

  const searchErrors = {
    TABLE_NOT_FOUND: 'Incorrect table number',
  }

  const [tableStatus, setTableStatus] = useState<string>('')
  const [error, setError] = useState<string>('')

  const updateTableStatus = (selected: TableType | null, occupied: TableType | null) => {
    let status = searchResults.TABLE_FREE

    if (selected) {
      if (selected.occupied) {
        status =
          occupied && selected.id === occupied.id
            ? searchResults.TABLE_OCCUPIED_BY_YOU
            : searchResults.TABLE_OCCUPIED
      }

      setTableStatus(status)
    }
  }

  const checkTable = (tableId: string) => {
    const table = tables.find(table => {
      return table.id === tableId
    })

    setError('')

    if (!table) {
      setError(searchErrors.TABLE_NOT_FOUND)
      return
    }

    store.setSelectedTable(table)

    updateTableStatus(table)
  }

  const onCheck = (e: SyntheticEvent) => {
    const value = e.target.value

    checkTable(value)
  }

  useEffect(
    () =>
      autorun(() => {
        updateTableStatus(selectedTable, occupiedTable)
      }),
    [selectedTable, occupiedTable],
  )

  return (
    <TableCheckerView
      label={searchLabel}
      onCheck={onCheck}
      tableStatus={tableStatus}
      error={error}
    />
  )
})
