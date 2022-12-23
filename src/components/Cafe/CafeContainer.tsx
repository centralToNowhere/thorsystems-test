import { observer } from 'mobx-react-lite'
import React from 'react'

import { useStore } from '@/store/store'

import { CafeView } from './CafeView'

export const CafeContainer = observer(() => {
  const store = useStore()

  return <CafeView store={store} />
})
