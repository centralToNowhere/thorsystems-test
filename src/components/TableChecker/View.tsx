import './style.scss'

import React, { SyntheticEvent } from 'react'

import { InputSearch } from '@/components/ui'

export type SearchViewType = {
  label: string
  tableStatus: string
  error: string
  onCheck: (e: SyntheticEvent) => void
}

export const TableCheckerView = ({
  label,
  error,
  tableStatus,
  onCheck,
}: SearchViewType) => {
  return (
    <div className={'search'}>
      <InputSearch
        id={'tables-search'}
        name={'tables-search'}
        className={'search__input'}
        onChange={onCheck}
        placeholder={label}
        error={error}
      />
      <span className={`search__status`}>{tableStatus}</span>
    </div>
  )
}
