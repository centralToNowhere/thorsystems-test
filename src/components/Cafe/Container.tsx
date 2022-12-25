import { observer } from 'mobx-react-lite'
import React from 'react'

import { CafeView } from './View'

export const Container = observer(() => {
  return <CafeView />
})
