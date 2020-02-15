import React from 'react';
import cns from 'classnames';
import styles from './index.less';

export default function Button({ className, children, ...rest }) {
  return (
    <button className={cns(className, styles.button)} {...rest}>
      {children}
    </button>
  );
}
