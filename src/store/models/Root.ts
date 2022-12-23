import { Instance, types } from 'mobx-state-tree'

import { Cart } from '@/store/models/cart'
import { Menu } from '@/store/models/menu'
import type { TableType } from '@/store/models/table'
import { Table } from '@/store/models/table'

export const Root = types.model({
  tables: types.array<TableType>(Table),
  occupiedTable: types.maybeNull(types.reference(Table)),
  menu: Menu,
  cart: Cart,
})

export interface RootType extends Instance<typeof Root> {}
