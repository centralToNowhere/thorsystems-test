import { observer } from 'mobx-react-lite'
import React from 'react'

import { MenuComponentView } from '@/components/MenuComponent/View'
import { useStore } from '@/store/store'

export const MenuComponent = observer(() => {
  const { menu, occupiedTable } = useStore()

  return <MenuComponentView categories={menu.categories} occupiedTable={occupiedTable} />
})
