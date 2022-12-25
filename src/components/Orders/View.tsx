import './style.scss'

import { observer } from 'mobx-react-lite'
import React from 'react'

import { Button } from '@/components/ui'
import { RootType } from '@/store/models/Root'

interface OrderViewType {
  orders: RootType['orders']
  tableNamePrefixText: string
  orderTotalPrefixText: string
  clearOrdersBtnText: string
  onClear: () => void
}

export const OrdersViewBase = ({
  orders,
  tableNamePrefixText,
  orderTotalPrefixText,
  clearOrdersBtnText,
  onClear,
}: OrderViewType) => {
  return (
    <div className={'orders'}>
      <span className={'cafe__section-title'}>Orders</span>
      <ul className={'orders__list'}>
        {orders.map(order => {
          const tableName = `${tableNamePrefixText} ${order.table.number}`
          const orderTotalText = `${orderTotalPrefixText}`
          const totalOrderText = `${order.total} p.`

          return (
            <li className={'orders__item'} key={order.id}>
              <span className={'orders__table-name'}>{tableName}</span>
              <ul className={'orders__position-list'}>
                {order.positions.map(orderPosition => {
                  const priceText = `${orderPosition.dish.price} p.`
                  const positionQuantityText = `x${orderPosition.quantity}`

                  return (
                    <li className={'orders__position-item'} key={orderPosition.id}>
                      <span className={'orders__position-name'}>
                        {orderPosition.dish.name}
                      </span>
                      <span className={'orders__position-total-price'}>{priceText}</span>
                      <span className={'orders__position-quantity'}>
                        {positionQuantityText}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <div className={'orders__delimiter'} />
              <div className={'orders__item-total'}>
                <span>{orderTotalText}</span>
                <span>{totalOrderText}</span>
              </div>
            </li>
          )
        })}
      </ul>
      <Button className={'orders__button-clear'} onClick={onClear}>
        {clearOrdersBtnText}
      </Button>
    </div>
  )
}

export const OrdersView = observer(OrdersViewBase)
