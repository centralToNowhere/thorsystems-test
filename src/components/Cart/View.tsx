import './style.scss'

import { observer } from 'mobx-react-lite'
import React from 'react'

import { Button } from '@/components/ui'
import { CartType } from '@/store/models/cart'

interface CartViewType {
  cartItems: CartType['items']
  totalText: string
}

export const CartViewBase = ({ cartItems, totalText }: CartViewType) => {
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
      <div className={'cart__controls-container'}>
        <span className={'cart__total'}>{totalText}</span>
        <div className={'cart__buttons'}>
          <Button>Clear</Button>
          <Button>Order</Button>
        </div>
      </div>
    </div>
  )
}

export const CartView = observer(CartViewBase)
