import { destroy, Instance, types } from 'mobx-state-tree'

import { CartItem, CartItemType } from './CartItem'

export const Cart = types
  .model({
    items: types.array(CartItem),
  })
  .actions(self => ({
    addCartItem: (cartItem: CartItemType) => {
      self.items.push(cartItem)
    },
    removeCartItem: (cartItem: CartItemType) => {
      destroy(cartItem)
    },
    clearCartItems: () => {
      self.items = []
    },
  }))

export const CartInitialState = {
  items: [],
}

export interface CartType extends Instance<typeof Cart> {}
