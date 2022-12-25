import './styles.scss'

import React from 'react'

import { MenuControls } from '@/components/MenuControls'
import { CategoryType } from '@/store/models/menu'
import { RootType } from '@/store/models/Root'

interface MenuComponentViewType {
  categories: CategoryType[]
  occupiedTable: RootType['occupiedTable']
}

export const MenuComponentView = ({
  categories,
  occupiedTable,
}: MenuComponentViewType) => {
  if (!occupiedTable) {
    return null
  }

  return (
    <div className={'menu'}>
      <span className={'cafe__section-title'}>Menu</span>
      <ul className={'menu__categories-list'}>
        {categories.map(category => {
          return (
            <li className={'menu__category-container'} key={category.id}>
              <span className={'menu__category-title'}>{category.name}</span>
              <ul className={'menu__dishes-list'}>
                {category.dishes.map(dish => {
                  return (
                    <li className={'menu__dish-container'} key={dish.id}>
                      <span className={'menu__dish-title'}>{dish.name}</span>
                      <span className={'menu__dish-price'}>{dish.price} p.</span>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      <MenuControls />
    </div>
  )
}
