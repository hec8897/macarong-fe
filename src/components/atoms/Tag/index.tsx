import React from 'react';
import classNames from 'classnames';
import styles from './tag.module.scss';

import type { TagProps } from './type';

const Tag: React.FC<TagProps> = ({ children, variant = 'accent', className, ...props }) => {
  return (
    <div className={classNames(styles.tag, styles[`__${variant}`], className)} {...props}>
      {children}
    </div>
  );
};

export default Tag;
