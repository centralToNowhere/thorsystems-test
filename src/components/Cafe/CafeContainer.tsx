import React from 'react'

import { useStore } from '@/store/store'

import { CafeView } from './CafeView'

export const CafeContainer = () => {
  const store = useStore()

  return <CafeView tables={store.tables} />
}
