import './style.scss'

import classNames from 'classnames'
import React, { InputHTMLAttributes, useRef } from 'react'

import CheckIcon from '@/assets/images/check.svg'

interface InputSearchType extends InputHTMLAttributes {
  error?: string
}

export const InputSearch = ({ error, className, ...props }: InputSearchType) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const inputClassNames = classNames({
    search__input: true,
    [className]: className,
  })

  const renderCheck = () => {
    return (
      <div className={'search__status-container'}>
        {!error && inputRef.current && inputRef.current.value && (
          <img src={CheckIcon} alt={''} />
        )}
      </div>
    )
  }

  return (
    <div className={'search'}>
      <input type={'search'} className={inputClassNames} {...props} ref={inputRef} />
      {renderCheck()}
      <div className={'search__error-container'}>
        {error && <span className={'search__error'}>{error}</span>}
      </div>
    </div>
  )
}
