import axios from 'axios'
import makeInspectable from 'mobx-devtools-mst'
import { createContext, useContext } from 'react'

import { DataProviderType } from '@/services/DataProvider'
import { RESTDataProvider } from '@/services/RESTDataProvider'
import { CartInitialState } from '@/store/models/cart'
import { MenuInitialState } from '@/store/models/menu'

import type { RootSnapshotItType, RootType } from './models/Root'
import { Root } from './models/Root'

const apiUrl = import.meta.env.THOR_API_DEV_URL

export type StoreEnvType = {
  dataProvider: DataProviderType
}

const initialState: RootSnapshotItType = {
  tables: [],
  occupiedTable: null,
  selectedTable: null,
  menu: MenuInitialState,
  cart: CartInitialState,
}

export const store = makeInspectable(
  Root.create(initialState, {
    dataProvider: new RESTDataProvider({
      apiUrl: apiUrl,
      httpClient: axios.create(),
      options: {
        populate: true,
      },
    }),
  }),
) as RootType

const StoreContext = createContext<null | RootType>(null)

export const StoreProvider = StoreContext.Provider

export function useStore(): RootType {
  const store = useContext(StoreContext)

  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }

  return store
}
