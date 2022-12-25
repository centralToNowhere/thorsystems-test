import './style.scss'

import React from 'react'

import { InputSearch } from '@/components/ui'

export type SearchViewType = {
  label: string
  tableStatus: string
  error: string
  onCheck: (tableId: string) => void
}

export const TableCheckerView = ({
  label,
  error,
  tableStatus,
  onCheck,
}: SearchViewType) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    onCheck(value)
  }

  return (
    <div className={'table-checker'}>
      <InputSearch
        id={'tables-search'}
        name={'tables-search'}
        onChange={onChangeHandler}
        placeholder={label}
        error={error}
      />
      <span className={`table-checker__status`}>{tableStatus}</span>
    </div>
  )
}
