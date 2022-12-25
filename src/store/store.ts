import makeInspectable from 'mobx-devtools-mst'
import { createContext, useContext } from 'react'

import { CartInitialState } from '@/store/models/cart'
import { MenuInitialState } from '@/store/models/menu'

import type { RootSnapshotItType, RootType } from './models/Root'
import { Root } from './models/Root'

const initialState: RootSnapshotItType = {
  tables: [
    {
      id: '1',
      number: 1,
      occupied: false,
    },
    {
      id: '2',
      number: 2,
      occupied: true,
    },
    {
      id: '3',
      number: 3,
      occupied: false,
    },
    {
      id: '4',
      number: 4,
      occupied: true,
    },
  ],
  occupiedTable: null,
  selectedTable: null,
  menu: MenuInitialState,
  cart: CartInitialState,
}

export const store = makeInspectable(Root.create(initialState)) as RootType

const StoreContext = createContext<null | RootType>(null)

export const StoreProvider = StoreContext.Provider

export function useStore(): RootType {
  const store = useContext(StoreContext)

  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }

  return store
}
