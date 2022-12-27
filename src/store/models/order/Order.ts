import { destroy, Instance, SnapshotIn, types } from 'mobx-state-tree'

import { OrderPosition, OrderPositionSnapshotInType } from '@/store/models/order'
import { Table } from '@/store/models/table'

const ORDER_ID_PREFIX = 'order_'

export const createOrderId = () => {
  return `${ORDER_ID_PREFIX}${new Date().getTime().toString().slice(6)}`
}

export const Order = types
  .model('Order', {
    id: types.identifier,
    table: types.reference(Table),
    positions: types.array(types.late(() => OrderPosition)),
  })
  .actions(self => {
    return {
      clear() {
        destroy(self)
      },
    }
  })
  .views(self => ({
    get total() {
      return self.positions.reduce((acc, curr) => {
        return acc + curr.total
      }, 0)
    },
  }))

export interface OrderType extends Instance<typeof Order> {}
export interface OrderSnapshotInType extends SnapshotIn<typeof Order> {}
export interface OrderPayloadType {
  table: string | number
  positions: string[]
}
export interface OrderResponseType {
  data: {
    id: string
    table: string
    positions: OrderPositionSnapshotInType[]
  }
}
