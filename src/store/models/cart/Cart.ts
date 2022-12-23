import { Instance, types } from 'mobx-state-tree'

import { CartItem } from './CartItem'

export const Cart = types.model({
  items: types.array(CartItem),
})

export const CartInitialState = {
  items: [],
}

export interface CartType extends Instance<typeof Cart> {}
