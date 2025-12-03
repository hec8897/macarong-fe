import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

import type { ButtonProps } from './type';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(styles.button, styles[`__${variant}`], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
