import { Instance, types } from 'mobx-state-tree'

import type { TableModelType } from '@/store/models/menu'
import { Menu } from '@/store/models/menu'
import { Table } from '@/store/models/Table'

export const Root = types.model({
  tables: types.array<TableModelType>(Table),
  menu: Menu,
})

export interface RootModelType extends Instance<typeof Root> {}
