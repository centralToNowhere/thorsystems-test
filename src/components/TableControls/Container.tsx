import { observer } from 'mobx-react-lite'
import React from 'react'

import { useStore } from '@/store/store'

import { TableControlsView } from './View'

export const TableControls = observer(() => {
  const store = useStore()

  const onFreeTable = () => {
    if (store.selectedTable) {
      store.selectedTable.setOccupiedState(false)
    }
  }

  const onTakeTable = () => {
    if (store.selectedTable) {
      store.selectedTable.setOccupiedState(true)
      store.setOccupiedTable(store.selectedTable)
    }
  }

  return <TableControlsView onFreeTable={onFreeTable} onTakeTable={onTakeTable} />
})
