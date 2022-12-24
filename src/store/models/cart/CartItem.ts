import { getParent, Instance, types } from 'mobx-state-tree'

import { Dish } from '@/store/models/menu'

const CART_ITEM_ID_PREFIX = 'cartItem_'

export const createCartItemId = () => {
  return `${CART_ITEM_ID_PREFIX}${new Date().getTime().toString().slice(6)}`
}

export const CartItem = types
  .model({
    id: types.identifier,
    quantity: types.number,
    dish: types.reference(Dish),
  })
  .actions(self => ({
    remove: () => {
      getParent(self, 2).removeCartItem(self)
    },
    incrementQuantity: () => {
      self.quantity += 1
    },
    decrementQuantity: () => {
      self.quantity -= 1
    },
  }))

export interface CartItemType extends Instance<typeof CartItem> {}
