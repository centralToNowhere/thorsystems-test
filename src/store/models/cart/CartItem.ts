import { getParent, Instance, types } from 'mobx-state-tree'

import { CartType } from '@/store/models/cart/Cart'
import { Dish } from '@/store/models/menu'

const CART_ITEM_ID_PREFIX = 'cartItem_'

export const createCartItemId = () => {
  return `${CART_ITEM_ID_PREFIX}${new Date().getTime().toString().slice(6)}`
}

export const CartItem = types
  .model('CartItem', {
    id: types.identifier,
    quantity: types.number,
    dish: types.reference(Dish),
  })
  .actions(self => ({
    remove: () => {
      getParent<CartType>(self, 2).removeCartItem(self as CartItemType)
    },
    incrementQuantity: () => {
      self.quantity += 1
    },
    decrementQuantity: () => {
      self.quantity -= 1

      if (self.quantity === 0) {
        ;(self as CartItemType).remove()
      }
    },
  }))

export interface CartItemType extends Instance<typeof CartItem> {}
