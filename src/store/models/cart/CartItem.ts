import { Instance, types } from 'mobx-state-tree'

import { Dish } from '@/store/models/menu'

export const CartItem = types.model({
  id: types.identifier,
  quantity: types.number,
  dish: types.reference(Dish),
})

export interface CartItemType extends Instance<typeof CartItem> {}
