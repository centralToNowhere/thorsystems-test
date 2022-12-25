import { Instance, types } from 'mobx-state-tree'

import { Category } from './Category'

export const Menu = types.model('Menu', {
  id: types.identifier,
  categories: types.array(Category),
})

export const MenuInitialState = {
  id: '1',
  categories: [
    {
      id: '1',
      name: 'Main',
      dishes: [
        {
          id: '1',
          name: 'Main 1',
          price: 123,
        },
        {
          id: '2',
          name: 'Main 2',
          price: 432,
        },
        {
          id: '3',
          name: 'Main 3',
          price: 654,
        },
      ],
    },
    {
      id: '2',
      name: 'Salads',
      dishes: [
        {
          id: '4',
          name: 'Salad 1',
          price: 543,
        },
      ],
    },
    {
      id: '3',
      name: 'Desserts',
      dishes: [
        {
          id: '5',
          name: 'Dessert 1',
          price: 332,
        },
      ],
    },
  ],
}

export interface MenuType extends Instance<typeof Menu> {}
