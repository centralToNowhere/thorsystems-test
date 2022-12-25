import { destroy, Instance, types } from 'mobx-state-tree'

import { CartItem, CartItemType } from './CartItem'

export const Cart = types
  .model('Cart', {
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
      self.items.clear()
    },
  }))
  .views(self => ({
    get total() {
      return self.items.reduce((acc, curr: CartItemType) => {
        return acc + curr.dish.price * curr.quantity
      }, 0)
    },
  }))

export const CartInitialState = {
  items: [],
}

export interface CartType extends Instance<typeof Cart> {}
