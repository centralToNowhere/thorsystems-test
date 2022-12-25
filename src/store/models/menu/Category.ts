import { Instance, types } from 'mobx-state-tree'

import { Dish } from './Dish'

export const Category = types.model('Category', {
  id: types.identifier,
  name: types.string,
  dishes: types.array(Dish),
})

export interface CategoryType extends Instance<typeof Category> {}
