import { observer } from 'mobx-react-lite'
import React from 'react'

import { useStore } from '@/store/store'

import { TableControlsView } from './View'

export const TableControls = observer(() => {
  const store = useStore()

  const onFreeTable = async () => {
    if (store.selectedTable) {
      await store.selectedTable.fetchUpdateOccupiedState(false)

      if (store.selectedTable === store.occupiedTable) {
        await store.fetchUpdateOccupiedTable(null)

        store.cart.clearCartItems()
      }
    }
  }

  const onTakeTable = async () => {
    if (store.selectedTable) {
      if (store.selectedTable.occupied) {
        return
      }

      if (store.occupiedTable) {
        await store.occupiedTable.fetchUpdateOccupiedState(false)
      }

      await store.fetchUpdateOccupiedTable(store.selectedTable)
      await store.selectedTable.fetchUpdateOccupiedState(true)

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
