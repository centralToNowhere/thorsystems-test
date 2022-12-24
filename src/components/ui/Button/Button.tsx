import './style.scss'

import classNames from 'classnames'
import React, { ButtonHTMLAttributes, FC } from 'react'

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonType> = ({ className, children, ...props }) => {
  const btnClasses = classNames({
    button: true,
    [className]: className,
  })

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  )
}
