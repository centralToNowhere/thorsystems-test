import './style.scss'

import React from 'react'

import { Cart } from '@/components/Cart'
import { MenuComponent } from '@/components/MenuComponent'
import { Tables } from '@/components/Tables'

export const CafeView = () => {
  const renderTables = () => {
    return (
      <div className={'cafe__section'}>
        <span className={'cafe__section-title'}>Tables</span>
        <Tables />
      </div>
    )
  }

  const renderMenu = () => {
    return (
      <div className={'cafe__section'}>
        <span className={'cafe__section-title'}>Menu</span>
        <MenuComponent />
      </div>
    )
  }

  const renderCart = () => {
    return (
      <div className={'cafe__section'}>
        <span className={'cafe__section-title'}>Cart</span>
        <Cart />
      </div>
    )
  }

  const renderOrder = () => {
    return (
      <div className={'cafe__section'}>
        <span className={'cafe__section-title'}>Order</span>
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
