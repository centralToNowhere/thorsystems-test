import { Instance, types } from 'mobx-state-tree'

export const Dish = types.model('Dish', {
  id: types.identifier,
  name: types.string,
  price: types.number,
})

export interface DishType extends Instance<typeof Dish> {}
