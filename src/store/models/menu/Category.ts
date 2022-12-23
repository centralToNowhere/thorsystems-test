import { Instance, types } from 'mobx-state-tree'

import type { DishModelType } from '@/store/models/menu'

import { Dish } from './Dish'

export const Category = types.model({
  id: types.identifierNumber,
  name: types.string,
  dishes: types.array<DishModelType>(Dish),
})

export interface CategoryModelType extends Instance<typeof Category> {}
