import './style.scss'

import classNames from 'classnames'
import React, { ButtonHTMLAttributes, FC } from 'react'

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'lg'
}

export const Button: FC<ButtonType> = ({ size, className, children, ...props }) => {
  const btnClasses = classNames({
    button: true,
    button_small: size === 'sm',
    [className as string]: className,
  })

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: 'lg',
}
