import './style.scss'

import React, { InputHTMLAttributes } from 'react'

interface InputSearchType extends InputHTMLAttributes {
  error?: string
}

export const InputSearch = ({ error, ...props }: InputSearchType) => {
  return (
    <div className={'input-search'}>
      <input type={'search'} {...props} />
      <div className={'input-search__error-container'}>
        {error && <span className={'input-search__error'}>{error}</span>}
      </div>
    </div>
  )
}
