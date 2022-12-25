import './style.scss'

import { observer } from 'mobx-react-lite'
import React from 'react'

import type { QuantityHandlerType } from '@/components/Cart'
import { CartControllers } from '@/components/CartControllers'
import { Button } from '@/components/ui'
import { CartItemType, CartType } from '@/store/models/cart'

interface CartViewType {
  cartItems: CartType['items']
  getQuantityHandler: (
    type: QuantityHandlerType,
    cartItem: CartItemType,
  ) => (e: React.MouseEvent) => void
}

export const CartViewBase = ({ cartItems, getQuantityHandler }: CartViewType) => {
  return (
    <div className={'cart'}>
      <span className={'cafe__section-title'}>Cart</span>
      <ul className={'cart__list'}>
        {cartItems.map(cartItem => {
          return (
            <li className={'cart__item-container'} key={cartItem.id}>
              <span className={'cart__item-title'}>{cartItem.dish.name}</span>
              <span className={'cart__item-price'}>{`${cartItem.dish.price} p.`}</span>
              <div className={'cart__item-quantity-controls'}>
                <Button size={'sm'} onClick={getQuantityHandler('dec', cartItem)}>
                  <span>-1</span>
                </Button>
                <span className={'cart__item-quantity'}>{`x${cartItem.quantity}`}</span>
                <Button size={'sm'} onClick={getQuantityHandler('inc', cartItem)}>
                  <span>+1</span>
                </Button>
              </div>
            </li>
          )
        })}
      </ul>
      <CartControllers />
    </div>
  )
}

export const CartView = observer(CartViewBase)
