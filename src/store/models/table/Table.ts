import { Instance, types } from 'mobx-state-tree'

export const Table = types.model({
  id: types.identifier,
  number: types.number,
  occupied: types.boolean,
})

export interface TableModelType extends Instance<typeof Table> {}
