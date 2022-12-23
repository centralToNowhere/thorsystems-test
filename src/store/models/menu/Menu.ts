import { Instance, types } from 'mobx-state-tree'

import type { CategoryModelType } from '@/store/models/menu'

import { Category } from './Category'

export const Menu = types.model({
  id: types.identifierNumber,
  categories: types.array<CategoryModelType>(Category),
})

export interface MenuModelType extends Instance<typeof Menu> {}
