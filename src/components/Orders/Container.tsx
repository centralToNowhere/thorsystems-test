import { observer } from 'mobx-react-lite'
import { getParent } from 'mobx-state-tree'
import React from 'react'

import { OrdersView } from '@/components/Orders/View'
import { RootType } from '@/store/models/Root'
import { useStore } from '@/store/store'

export const Orders = observer(() => {
  const { orders } = useStore()

  const tableNamePrefixText = 'Table:'
  const orderTotalPrefixText = 'Total:'
  const clearOrdersBtnText = 'Clear'

  const onClear = () => {
    const root: RootType = getParent<RootType>(orders)

    root.clearOrders()
  }

  return (
    <OrdersView
      tableNamePrefixText={tableNamePrefixText}
      orderTotalPrefixText={orderTotalPrefixText}
      orders={orders}
      clearOrdersBtnText={clearOrdersBtnText}
      onClear={onClear}
    />
  )
})
