import { observer } from 'mobx-react-lite'
import React from 'react'

import { CartView } from '@/components/Cart/View'
import { CartItemType } from '@/store/models/cart'
import { useStore } from '@/store/store'

export type QuantityHandlerType = 'inc' | 'dec'

export const Cart = observer(() => {
  const { cart } = useStore()

  const onQuantityInc = (cartItem: CartItemType) => {
    cartItem.incrementQuantity()
  }

  const onQuantityDec = (cartItem: CartItemType) => {
    cartItem.decrementQuantity()
  }

  const getQuantityHandler = (type: QuantityHandlerType, cartItem: CartItemType) => {
    switch (type) {
      case 'inc':
        return () => {
          onQuantityInc(cartItem)
        }
      case 'dec':
        return () => {
          onQuantityDec(cartItem)
        }
      default:
        return () => {}
    }
  }

  return <CartView cartItems={cart.items} getQuantityHandler={getQuantityHandler} />
})
