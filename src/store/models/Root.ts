import { Instance, SnapshotIn, types } from 'mobx-state-tree'

import { Cart } from '@/store/models/cart'
import { Menu } from '@/store/models/menu'
import { Order, OrderType } from '@/store/models/order'
import type { TableType } from '@/store/models/table'
import { Table } from '@/store/models/table'

export const Root = types
  .model('Root', {
    tables: types.array(Table),
    occupiedTable: types.maybeNull(types.reference(Table)),
    selectedTable: types.maybeNull(types.reference(Table)),
    menu: Menu,
    cart: Cart,
    orders: types.array(Order),
  })
  .actions(self => ({
    setSelectedTable: (table: TableType | null) => {
      self.selectedTable = table
    },
    setOccupiedTable: (table: TableType | null) => {
      if (self.occupiedTable && table === null) {
        self.occupiedTable.setOccupiedState(false)
      }

      self.occupiedTable = table

      if (table) {
        table.setOccupiedState(true)
      }
    },
    addOrder: (order: OrderType) => {
      self.orders.push(order)
    },
    clearOrders: () => {
      self.orders.clear()
    },
  }))

export interface RootType extends Instance<typeof Root> {}
export interface RootSnapshotItType extends SnapshotIn<typeof Root> {}
