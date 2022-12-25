import { Instance, SnapshotIn, types } from 'mobx-state-tree'

import { Cart } from '@/store/models/cart'
import { Menu } from '@/store/models/menu'
import type { TableType } from '@/store/models/table'
import { Table } from '@/store/models/table'

export const Root = types
  .model('Root', {
    tables: types.array(Table),
    occupiedTable: types.maybeNull(types.reference(Table)),
    selectedTable: types.maybeNull(types.reference(Table)),
    menu: Menu,
    cart: Cart,
  })
  .actions(self => ({
    setSelectedTable: (table: TableType | null) => {
      self.selectedTable = table
    },
    setOccupiedTable: (table: TableType | null) => {
      self.occupiedTable = table
    },
  }))

export interface RootType extends Instance<typeof Root> {}
export interface RootSnapshotItType extends SnapshotIn<typeof Root> {}
