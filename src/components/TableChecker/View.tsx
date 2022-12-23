import './styles.scss'

import React, { SyntheticEvent, useState } from 'react'

import { TableType } from '@/store/models/table'

export type SearchViewType = {
  tables: TableType[]
}

const searchLabel = 'Check table status'

const searchResults = {
  TABLE_NOT_FOUND: 'Incorrect table number',
  TABLE_OCCUPIED: 'OCCUPIED',
  TABLE_FREE: 'TABLE IS FREE',
}

export const TableCheckerView = ({ tables }: SearchViewType) => {
  const [tableStatus, setTableStatus] = useState<string>('')
  const [isError, setError] = useState<boolean>(false)

  const onChangeHandler = (e: SyntheticEvent) => {
    const value = e.target.value
    const table = tables.find(table => {
      return table.id === value
    })

    setError(false)

    if (!table) {
      setTableStatus(searchResults.TABLE_NOT_FOUND)
      setError(true)
      return
    }

    setTableStatus(
      table.occupied ? searchResults.TABLE_OCCUPIED : searchResults.TABLE_FREE,
    )
  }

  return (
    <div className={'search'}>
      <input
        id={'tables-search'}
        type={'search'}
        name={'tables-search'}
        className={'search__input'}
        onChange={onChangeHandler}
        placeholder={searchLabel}
      />
      <span className={`search__status${isError ? ' search__status_error' : ''}`}>
        {tableStatus}
      </span>
    </div>
  )
}
