import { observer } from 'mobx-react-lite'
import React from 'react'

import { CartView } from '@/components/Cart/View'
import { useStore } from '@/store/store'

export const Cart = observer(() => {
  const { cart } = useStore()
  const totalText = `Total: ${cart.total}`

  return <CartView totalText={totalText} cartItems={cart.items} />
})
