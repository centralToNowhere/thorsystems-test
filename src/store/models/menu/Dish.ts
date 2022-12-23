import { Instance, types } from 'mobx-state-tree'

export const Dish = types.model({
  id: types.identifierNumber,
  name: types.string,
  price: types.number,
})

export interface DishModelType extends Instance<typeof Dish> {}
