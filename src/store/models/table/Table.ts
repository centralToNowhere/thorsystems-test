import { getEnv, Instance, types } from 'mobx-state-tree'

import { StoreEnvType } from '@/store/store'

export const Table = types
  .model('Table', {
    id: types.identifier,
    number: types.number,
    occupied: types.boolean,
  })
  .actions(self => {
    const dataProvider = getEnv<StoreEnvType>(self).dataProvider

    return {
      async fetchUpdateOccupiedState(state: boolean) {
        try {
          await dataProvider.update<
            {
              occupied: boolean
            },
            TableType[]
          >('tables', self.id, {
            data: {
              occupied: state,
            },
          })

          this.setOccupiedState(state)
        } catch (e) {
          console.error('Failed to update app state', e)
        }
      },
      setOccupiedState(state: boolean) {
        self.occupied = state
      },
    }
  })

export interface TableType extends Instance<typeof Table> {}
