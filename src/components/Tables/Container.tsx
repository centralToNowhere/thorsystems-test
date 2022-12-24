import { observer } from 'mobx-react-lite'
import React from 'react'

import { useStore } from '@/store/store'

import { TablesView } from './View'

export const Tables = observer(() => {
  const { tables, selectedTable } = useStore()

  return <TablesView tables={tables} selectedTable={selectedTable} />
})
