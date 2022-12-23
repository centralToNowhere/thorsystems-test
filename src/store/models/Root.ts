import { Instance, types } from 'mobx-state-tree'

import { Cart } from '@/store/models/cart'
import { Menu } from '@/store/models/menu'
import type { TableModelType } from '@/store/models/table'
import { Table } from '@/store/models/table'

export const Root = types.model({
  tables: types.array<TableModelType>(Table),
  occupiedTable: types.maybeNull(Table),
  menu: Menu,
  cart: Cart,
})

export interface RootModelType extends Instance<typeof Root> {}
