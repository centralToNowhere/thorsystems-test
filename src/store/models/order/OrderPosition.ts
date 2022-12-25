import { Instance, types } from 'mobx-state-tree'

import { Dish } from '@/store/models/menu'

const ORDER_POSITION_ID_PREFIX = 'order_'

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
