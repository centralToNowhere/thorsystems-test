import { observer } from 'mobx-react-lite'
import { castToReferenceSnapshot, castToSnapshot } from 'mobx-state-tree'
import React from 'react'

import { CartControllersView } from '@/components/CartControllers/View'
import {
  createOrderId,
  createOrderPositionId,
  Order,
  OrderPosition,
} from '@/store/models/order'
import { useStore } from '@/store/store'

export type CartControllersType = 'clear' | 'order'

export const CartControllers = observer(() => {
  const store = useStore()
  const { cart, occupiedTable } = store
  const totalText = `Total: ${cart.total} p.`

  const onCartClear = () => {
    cart.clearCartItems()
  }

  const onOrder = () => {
    if (!occupiedTable) {
      return
    }

    const order = Order.create({
      id: createOrderId(),
      table: occupiedTable.id,
      positions: castToSnapshot(
        cart.items.map(cartItem => {
          return OrderPosition.create({
            id: createOrderPositionId(),
            quantity: cartItem.quantity,
            dish: castToReferenceSnapshot(cartItem.dish),
          })
        }),
      ),
    })

    store.addOrder(order)
    cart.clearCartItems()
    store.setOccupiedTable(null)
  }

  const getButtonHandler = (type: CartControllersType) => {
    switch (type) {
      case 'clear':
        return onCartClear
      case 'order':
        return onOrder
    }
  }

  const isClearBtnDisabled = () => {
    return cart.items.length === 0
  }

  const isOrderBtnDisabled = () => {
    return cart.items.length === 0
  }

  return (
    <CartControllersView
      cartClearBtnText={'Clear'}
      orderBtnText={'Order'}
      getButtonHandler={getButtonHandler}
      totalText={totalText}
      clearBtnDisabled={isClearBtnDisabled()}
      orderBtnDisabled={isOrderBtnDisabled()}
    />
  )
})
