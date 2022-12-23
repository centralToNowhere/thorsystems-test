import './styles.scss'

import React from 'react'

import { TableChecker } from '@/components/TableChecker'
import { RootType } from '@/store/models/Root'

export type CafeViewType = {
  store: RootType[]
}

export const CafeView = ({ store }: CafeViewType) => {
  const renderTables = () => {
    return (
      <div className={'cafe__section'}>
        <div className={'tables'}>
          <div className={'tables__list'}>
            {store.tables.map(table => {
              return (
                <div className={'tables__item'} key={table.id}>
                  <p>{table.number}</p>
                </div>
              )
            })}
          </div>
          <TableChecker />
        </div>
      </div>
    )
  }

  const renderMenu = () => {
    return (
      <div className={'cafe__section'}>
        <div className={'menu'}></div>
      </div>
    )
  }

  const renderCart = () => {
    return (
      <div className={'cafe__section'}>
        <div className={'cart'}></div>
      </div>
    )
  }

  const renderOrder = () => {
    return (
      <div className={'cafe__section'}>
        <div className={'order'}></div>
      </div>
    )
  }

  return (
    <div className={'cafe'}>
      {renderTables()}
      {renderCart()}
      {renderMenu()}
      {renderOrder()}
    </div>
  )
}
