import { Instance, types } from 'mobx-state-tree'

import { Dish } from '@/store/models/menu'

export const OrderPosition = types.model('OrderPosition', {
  id: types.identifier,
  quantity: types.number,
  dish: types.reference(Dish),
})

export interface OrderPositionType extends Instance<typeof OrderPosition> {}
