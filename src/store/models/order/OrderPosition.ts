import { Instance, SnapshotIn, types } from 'mobx-state-tree'

import { Dish } from '@/store/models/menu'

const ORDER_POSITION_ID_PREFIX = 'order_pos_'

export const createOrderPositionId = () => {
  return `${ORDER_POSITION_ID_PREFIX}${new Date().getTime().toString().slice(6)}`
}

export const OrderPosition = types
  .model('OrderPosition', {
    id: types.identifier,
    quantity: types.number,
    dish: types.reference(Dish),
  })
  .views(self => ({
    get total() {
      return self.dish.price * self.quantity
    },
  }))

export interface OrderPositionType extends Instance<typeof OrderPosition> {}
export interface OrderPositionSnapshotInType extends SnapshotIn<typeof OrderPosition> {}
export interface OrderPositionPayloadType {
  data: {
    quantity: number
    dish: string | number
  }
}
export interface OrderPositionResponseType {
  data: {
    id: string
    quantity: number
    dish: string
  }
}
