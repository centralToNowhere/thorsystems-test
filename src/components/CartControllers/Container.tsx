import { observer } from 'mobx-react-lite'
import { castToSnapshot } from 'mobx-state-tree'
import React from 'react'

import { CartControllersView } from '@/components/CartControllers/View'
import { CartItemType } from '@/store/models/cart'
import { createOrderId } from '@/store/models/order'
import { useStore } from '@/store/store'

export type CartControllersType = 'clear' | 'order'

export const CartControllers = observer(() => {
  const store = useStore()
  const { cart, occupiedTable } = store
  const totalText = `Total: ${cart.total} p.`

  const onCartClear = () => {
    cart.clearCartItems()
  }

  const onOrder = async () => {
    if (!occupiedTable) {
      return
    }

    await store.fetchCreateOrder({
      id: createOrderId(),
      table: occupiedTable.id,
      positions: castToSnapshot(
        cart.items.map((cartItem: CartItemType) => {
          return {
            quantity: cartItem.quantity,
            dish: cartItem.dish,
          }
        }),
      ),
    })

    cart.clearCartItems()

    await occupiedTable.fetchUpdateOccupiedState(false)
    await store.fetchUpdateOccupiedTable(null)
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
