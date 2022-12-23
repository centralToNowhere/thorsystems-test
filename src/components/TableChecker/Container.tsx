import { observer } from 'mobx-react-lite'
import React from 'react'

import { useStore } from '@/store/store'

import { TableCheckerView } from './View'

export const TableChecker = observer(() => {
  const { tables } = useStore()

  return <TableCheckerView tables={tables} />
})
