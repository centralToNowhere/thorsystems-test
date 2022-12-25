import { Instance, types } from 'mobx-state-tree'

import { OrderPosition } from '@/store/models/order'
import { Table } from '@/store/models/table'

export const Order = types.model('Order', {
  id: types.identifier,
  table: types.reference(Table),
  positions: types.array(OrderPosition),
})

export interface OrderType extends Instance<typeof Order> {}
