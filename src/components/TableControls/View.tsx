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
}

export const TableControlsView = ({
  onTakeTable,
  onFreeTable,
}: TableControlsViewType) => {
  return (
    <div className={'table-controls'}>
      <Button className={'table-controls__button'} onClick={onFreeTable}>
        {actionLabels.freeTable}
      </Button>

      <Button onClick={onTakeTable}>{actionLabels.takeTable}</Button>
    </div>
  )
}
