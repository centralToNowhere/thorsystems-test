import makeInspectable from 'mobx-devtools-mst'
import { createContext, useContext } from 'react'

import type { RootModelType } from './models'
import { Root } from './models/Root'

const initialState: RootModelType = {
  tables: [
    {
      id: 1,
      number: 1,
      occupied: false,
    },
    {
      id: 2,
      number: 2,
      occupied: true,
    },
  ],
  menu: {
    id: 1,
    categories: [
      {
        id: 1,
        name: 'Main',
        dishes: [
          {
            id: 1,
            name: 'Main 1',
            price: 123,
          },
          {
            id: 2,
            name: 'Main 2',
            price: 432,
          },
          {
            id: 3,
            name: 'Main 3',
            price: 654,
          },
        ],
      },
      {
        id: 2,
        name: 'Salads',
        dishes: [
          {
            id: 1,
            name: 'Salad 1',
            price: 543,
          },
        ],
      },
      {
        id: 2,
        name: 'Desserts',
        dishes: [
          {
            id: 1,
            name: 'Dessert 1',
            price: 332,
          },
        ],
      },
    ],
  },
}

export const store = makeInspectable(Root.create(initialState))

const StoreContext = createContext<null | RootModelType>(null)

export const StoreProvider = StoreContext.Provider

export function useStore() {
  const store = useContext(StoreContext)

  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }

  return store
}

export const createStore = () => {
  makeInspectable(RootStore.create())
}
