import { observer } from 'mobx-react-lite'
import React from 'react'

import { useStore } from '@/store/store'

import { TableControlsView } from './View'

export const TableControls = observer(() => {
  const store = useStore()

  const onFreeTable = () => {
    if (store.selectedTable) {
      store.selectedTable.setOccupiedState(false)

      if (store.selectedTable === store.occupiedTable) {
        store.setOccupiedTable(null)
        store.cart.clearCartItems()
      }
    }
  }

  const onTakeTable = () => {
    if (store.selectedTable) {
      if (store.selectedTable.occupied) {
        return
      }

      if (store.occupiedTable) {
        store.occupiedTable.setOccupiedState(false)
      }

      store.setOccupiedTable(store.selectedTable)
      store.cart.clearCartItems()
    }
  }

  const isFreeTableBtnDisabled = () => {
    const table = store.selectedTable

    return !table || !table.occupied
  }

  const isTakeTableBtnDisabled = () => {
    const table = store.selectedTable

    return !table || table.occupied
  }

  return (
    <TableControlsView
      freeTableDisabled={isFreeTableBtnDisabled()}
      takeTableDisabled={isTakeTableBtnDisabled()}
      onFreeTable={onFreeTable}
      onTakeTable={onTakeTable}
    />
  )
})
