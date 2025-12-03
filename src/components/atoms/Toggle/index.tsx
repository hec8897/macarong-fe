import React from 'react';
import classNames from 'classnames';
import styles from './toggle.module.scss';

import type { ToggleProps } from './type';

const Toggle: React.FC<ToggleProps> = ({ checked, onChange, disabled = false, ...props }) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleClick}
      className={classNames(styles.toggle, { [styles.__checked]: checked })}
      {...props}
    >
      <span className={classNames(styles.__thumb, { [styles.checked]: checked })} />
    </button>
  );
};

export default Toggle;
