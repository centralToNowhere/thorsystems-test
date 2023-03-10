import './style.scss'

import React from 'react'

import { Button, InputSearch } from '@/components/ui'

interface MenuControlsViewType {
  onAddToCart: () => void
  onEnterDishName: (dishName: string) => void
  inputPlaceholder: string
  error: string
  buttonChooseText: string
  buttonChooseDisabled: boolean
}

export const MenuControlsView = ({
  onAddToCart,
  onEnterDishName,
  inputPlaceholder,
  error,
  buttonChooseText,
  buttonChooseDisabled,
}: MenuControlsViewType) => {
  const onEnterDishNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    onEnterDishName(value)
  }

  return (
    <div className={'menu-controls'}>
      <InputSearch
        id={'menu-search'}
        name={'menu-search'}
        onChange={onEnterDishNameHandler}
        placeholder={inputPlaceholder}
        error={error}
      />
      <Button
        onClick={onAddToCart}
        className={'menu-controls__button'}
        disabled={buttonChooseDisabled}
      >
        {buttonChooseText}
      </Button>
    </div>
  )
}
