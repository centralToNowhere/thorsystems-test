import './style.scss'

import React from 'react'

import { Tables } from '@/components/Tables'
import { TableType } from '@/store/models/table'

export type CafeViewType = {
  tables: TableType[]
  occupiedTable: TableType
  selectedTable: TableType
}

export const CafeView = () => {
  const renderTables = () => {
    return (
      <div className={'cafe__section'}>
        <Tables />
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
