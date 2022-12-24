import { Instance, types } from 'mobx-state-tree'

export const Table = types
  .model({
    id: types.identifier,
    number: types.number,
    occupied: types.boolean,
  })
  .actions(self => ({
    setOccupiedState: (state: boolean) => {
      self.occupied = state
    },
  }))

export interface TableType extends Instance<typeof Table> {}
