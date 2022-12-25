import React from 'react'

import type { CartControllersType } from '@/components/CartControllers'
import { Button } from '@/components/ui'

interface CartControllersViewType {
  cartClearBtnText: string
  orderBtnText: string
  getButtonHandler: (type: CartControllersType) => () => void
  totalText: string
  clearBtnDisabled: boolean
  orderBtnDisabled: boolean
}

export const CartControllersView = ({
  totalText,
  getButtonHandler,
  orderBtnText,
  cartClearBtnText,
  clearBtnDisabled,
  orderBtnDisabled,
}: CartControllersViewType) => {
  return (
    <div className={'cart__controls-container'}>
      <span className={'cart__total'}>{totalText}</span>
      <div className={'cart__buttons'}>
        <Button onClick={getButtonHandler('clear')} disabled={clearBtnDisabled}>
          {cartClearBtnText}
        </Button>
        <Button onClick={getButtonHandler('order')} disabled={orderBtnDisabled}>
          {orderBtnText}
        </Button>
      </div>
    </div>
  )
}
