/**
 * Created by 0291 on 2018/3/28.
 */
import React from 'react';
import styles from './Header.less';

const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      {children}
    </div>
  );
};

Header.Right = ({ children }) => {
  return (
    <div className={styles.right}>
      {children}
    </div>
  );
};

export default Header;
