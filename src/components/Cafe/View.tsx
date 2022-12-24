import './style.scss'

import React from 'react'

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
        <div className={'menu'}></div>
      </div>
    )
  }

  const renderCart = () => {
    return (
      <div className={'cafe__section'}>
        <span className={'cafe__section-title'}>Cart</span>
        <div className={'cart'}></div>
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
