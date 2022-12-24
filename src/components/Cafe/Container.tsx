import { observer } from 'mobx-react-lite'
import React from 'react'

import { useStore } from '@/store/store'

import { CafeView } from './View'

export const Container = observer(() => {
  const { tables, occupiedTable, selectedTable } = useStore()

  return (
    <CafeView
      tables={tables}
      occupiedTable={occupiedTable}
      selectedTable={selectedTable}
    />
  )
})
