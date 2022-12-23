import { Instance, types } from 'mobx-state-tree'

import type { DishType } from '@/store/models/menu'

import { Dish } from './Dish'

export const Category = types.model({
  id: types.identifier,
  name: types.string,
  dishes: types.array<DishType>(Dish),
})

export interface CategoryType extends Instance<typeof Category> {}
