import './style.scss'

import { observer } from 'mobx-react-lite'
import React from 'react'

import { CartType } from '@/store/models/cart'

interface CartViewType {
  cartItems: CartType['items']
}

export const CartView = observer(({ cartItems }: CartViewType) => {
  return (
    <div className={'cart'}>
      <ul className={'cart__list'}>
        {cartItems.map(cartItem => {
          return (
            <li className={'cart__item-container'} key={cartItem.id}>
              <span className={'cart__item-title'}>{cartItem.dish.name}</span>
              <span className={'cart__item-price'}>{`${cartItem.dish.price} p.`}</span>
              <span className={'cart__item-quantity'}>{`x${cartItem.quantity}`}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
})
