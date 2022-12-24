import './style.scss'

import React from 'react'

import { Button, InputSearch } from '@/components/ui'

interface MenuControlsViewType {
  onAddToCart: () => void
  onEnterDishName: () => void
  inputPlaceholder: string
  error: string
  buttonChooseText: string
}

export const MenuControlsView = ({
  onAddToCart,
  onEnterDishName,
  inputPlaceholder,
  error,
  buttonChooseText,
}: MenuControlsViewType) => {
  return (
    <div className={'menu-controls'}>
      <InputSearch
        id={'menu-search'}
        name={'menu-search'}
        onChange={onEnterDishName}
        placeholder={inputPlaceholder}
        error={error}
      />
      <Button onClick={onAddToCart} className={'menu-controls__button'}>
        {buttonChooseText}
      </Button>
    </div>
  )
}
