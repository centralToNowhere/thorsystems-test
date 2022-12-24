import './style.scss'

import React from 'react'

import { Button } from '@/components/ui'

const actionLabels = {
  freeTable: 'Free table',
  takeTable: 'Take a table',
}

export interface TableControlsViewType {
  onTakeTable: () => void
  onFreeTable: () => void
  freeTableDisabled: boolean
  takeTableDisabled: boolean
}

export const TableControlsView = ({
  onTakeTable,
  onFreeTable,
  freeTableDisabled,
  takeTableDisabled,
}: TableControlsViewType) => {
  return (
    <div className={'table-controls'}>
      <Button
        className={'table-controls__button'}
        onClick={onFreeTable}
        disabled={freeTableDisabled}
      >
        {actionLabels.freeTable}
      </Button>

      <Button onClick={onTakeTable} disabled={takeTableDisabled}>
        {actionLabels.takeTable}
      </Button>
    </div>
  )
}
