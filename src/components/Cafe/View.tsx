import './style.scss'

import React from 'react'

import { Cart } from '@/components/Cart'
import { MenuComponent } from '@/components/MenuComponent'
import { Orders } from '@/components/Orders'
import { Tables } from '@/components/Tables'

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
        <MenuComponent />
      </div>
    )
  }

  const renderCart = () => {
    return (
      <div className={'cafe__section'}>
        <Cart />
      </div>
    )
  }

  const renderOrder = () => {
    return (
      <div className={'cafe__section'}>
        <Orders />
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
