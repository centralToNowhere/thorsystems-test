import {
  applySnapshot,
  castToSnapshot,
  destroy,
  flow,
  getEnv,
  Instance,
  SnapshotIn,
  types,
} from 'mobx-state-tree'

import { Cart } from '@/store/models/cart'
import { Menu, MenuType } from '@/store/models/menu'
import type {
  OrderPayloadType,
  OrderPositionPayloadType,
  OrderPositionResponseType,
  OrderResponseType,
  OrderSnapshotInType,
  OrderType,
} from '@/store/models/order'
import { Order } from '@/store/models/order'
import type { TableType } from '@/store/models/table'
import { Table } from '@/store/models/table'
import { StoreEnvType } from '@/store/store'

export const Root = types
  .model('Root', {
    tables: types.array(Table),
    occupiedTable: types.maybeNull(types.reference(Table)),
    selectedTable: types.maybeNull(types.reference(Table)),
    menu: Menu,
    cart: Cart,
    orders: types.array(Order),
  })
  .actions(self => {
    const dataProvider = getEnv<StoreEnvType>(self).dataProvider
    // @ts-ignore
    const actionObj = {
      async afterCreate() {
        await this.loadRoot()
      },
      loadTables: async (): Promise<TableType[]> => {
        const { data } = await dataProvider.getMany('tables')

        return data as TableType[]
      },
      loadOrders: async (): Promise<OrderType[]> => {
        const { data } = await dataProvider.getMany('orders')

        return data as OrderType[]
      },
      loadMenu: async (): Promise<MenuType> => {
        const { data } = await dataProvider.getSingle('menu')

        return data as MenuType
      },
      async loadRoot() {
        try {
          const root: {
            data: {
              occupiedTable: TableType | null
            }
          } = await dataProvider.getSingle('root')
          const tables = await this.loadTables()
          const menu = await this.loadMenu()
          const orders = await this.loadOrders()

          applySnapshot(self.tables, tables)
          applySnapshot(self.menu, menu)
          applySnapshot(
            self.orders,
            orders.map(order => {
              return {
                id: order.id,
                // table: order.table -> // Error while converting ?????
                table: order.table.id,
                positions: order.positions.map(orderPosition => {
                  return {
                    id: orderPosition.id,
                    quantity: orderPosition.quantity,
                    // dish: orderPosition.dish -> // ????? Error while converting
                    dish: orderPosition.dish.id,
                  }
                }),
              }
            }),
          )

          this.setSelectedTable(null)
          this.setOccupiedTable(
            root.data.occupiedTable ? Table.create(root.data.occupiedTable) : null,
          )
        } catch (e) {
          console.error('Failed to load app state', e)
        }
      },
      setSelectedTable: async (table: TableType | null) => {
        self.selectedTable = table
      },
      setOccupiedTable: (table: TableType | null) => {
        self.occupiedTable = table
      },
      async fetchUpdateOccupiedTable(table: TableType | null) {
        try {
          await dataProvider.updateSingle('root', {
            data: {
              occupiedTable: table ? table.id : null,
            },
          })

          this.setOccupiedTable(table)
        } catch (e) {
          console.error('Failed to update state', e)
        }
      },
      async fetchCreateOrder(orderSnapshot: OrderSnapshotInType) {
        const positions = orderSnapshot.positions ? orderSnapshot.positions : []
        let positionsData

        try {
          positionsData = await Promise.all(
            positions.map(async orderPosition => {
              return await dataProvider.create<
                OrderPositionPayloadType,
                OrderPositionResponseType
              >('order-positions', {
                data: {
                  quantity: orderPosition.quantity,
                  dish: orderPosition.dish,
                },
              })
            }),
          )
        } catch (e) {
          console.error('Failed to create order positions', e)
          return
        }

        try {
          const ordersData = await dataProvider.create<
            OrderPayloadType,
            OrderResponseType
          >('orders', {
            data: {
              table: orderSnapshot.table,
              positions: positionsData.map(orderPosition => {
                return orderPosition.data.data.id
              }),
            },
          })

          this.addOrder(
            Order.create({
              id: ordersData.data.data.id,
              table: ordersData.data.data.table,
              positions: ordersData.data.data.positions.map(orderPosition => {
                return castToSnapshot(orderPosition)
              }),
            }),
          )
        } catch (e) {
          console.error('Failed to create order', e)
        }
      },
      async fetchDeleteOrder(orderId: string) {
        await dataProvider.delete('orders', orderId)
      },
      addOrder: (order: OrderType) => {
        self.orders.push(order)
      },
      clearOrders: flow(function* () {
        try {
          for (const order of self.orders) {
            yield actionObj.fetchDeleteOrder(order.id)
          }

          destroy(self.orders)
        } catch (e) {
          console.error('Failed to delete orders', e)
        }
      }),
    }

    return actionObj
  })

export interface RootType extends Instance<typeof Root> {}
export interface RootSnapshotItType extends SnapshotIn<typeof Root> {}
