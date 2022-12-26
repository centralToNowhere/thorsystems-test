import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'

import { CartItem, CartItemType, createCartItemId } from '@/store/models/cart'
import { CategoryType, DishType } from '@/store/models/menu'
import { useStore } from '@/store/store'

import { MenuControlsView } from './/View'

export const MenuControls = observer(() => {
  const { menu, cart } = useStore()
  const [error, setError] = useState<string>('')
  const [selectedDish, setSelectedDish] = useState<DishType | null>(null)

  const buttonChooseText = 'Add to cart'
  const inputPlaceholder = 'Enter dish name to order'

  const searchErrors = {
    DISH_NOT_FOUND: 'Dish not found',
  }

  const getDishByName = (dishName: string) => {
    return menu.categories
      .reduce((acc: DishType[], curr: CategoryType) => {
        return acc.concat(curr.dishes)
      }, [] as DishType[])
      .find((dish: DishType) => {
        return dish.name === dishName
      })
  }

  const getCartItemByDishName = (dishName: string): CartItemType | undefined => {
    return cart.items.find((cartItem: CartItemType) => {
      return cartItem.dish.name === dishName
    })
  }

  const onAddToCart = () => {
    if (selectedDish) {
      const cartItem = getCartItemByDishName(selectedDish.name)

      if (cartItem) {
        cartItem.incrementQuantity()
        return
      }

      cart.addCartItem(
        CartItem.create({
          id: createCartItemId(),
          quantity: 1,
          dish: selectedDish.id,
        }),
      )
    }
  }

  const onEnterDishName = (dishName: string) => {
    const dish = getDishByName(dishName)

    setError('')

    if (!dish) {
      setError(searchErrors.DISH_NOT_FOUND)
      setSelectedDish(null)
      return
    }

    setSelectedDish(dish)
  }

  const isButtonChooseDisabled = () => {
    return !selectedDish
  }

  return (
    <MenuControlsView
      onAddToCart={onAddToCart}
      onEnterDishName={onEnterDishName}
      buttonChooseText={buttonChooseText}
      inputPlaceholder={inputPlaceholder}
      error={error}
      buttonChooseDisabled={isButtonChooseDisabled()}
    />
  )
})
